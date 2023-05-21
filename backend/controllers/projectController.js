const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Project = require("../models/Project");
const TechFeature = require("../models/TechFeature");
const cloudinary = require("cloudinary");

exports.createProject = catchAsyncErrors(async (req, res) => {
  try {
    const {title,description } = req.body;

    let thumbnailImage ; 
    if (req.body.thumbnailImage) {
      const result = await cloudinary.uploader.upload(req.body.thumbnailImage);
      thumbnailImage = result.secure_url;
    }

    const newProject = new Project({
      title,
      description,
      thumbnailImage
    })

    await newProject.save();

    res.status(200).json({ message: "Başarılı şekilde proje oluşturuldu " });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

exports.getProjectsWithPage = catchAsyncErrors(async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Get the page number from the query parameter, default to 1 if not provided
    const limit = parseInt(req.query.limit) || 4; // Get the limit from the query parameter, default to 10 if not provided

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const totalProjects = await Project.countDocuments();

    const allProjects = await Project.find().select("title description thumbnailImage createdAt updatedAt").skip(startIndex).limit(limit);

    res.status(200).json({
      totalProjects,
      currentPage: page,
      totalPages: Math.ceil(totalProjects / limit),
      results: allProjects,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

exports.getProjectDetails = catchAsyncErrors(async (req, res) => {
  try {
    const projectDetails = await Project.findById(
      req.params.projectId
    ).populate("technologies", "name");

    res.status(200).json(projectDetails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

exports.deleteProject = catchAsyncErrors(async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.projectId);
    res.status(200).json({ message: "Başarılı Şekilde proje silindi " });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
const uploadImagesToCloudinary = async (images) => {
  const uploadedImages = await Promise.all(
    images.map(async (image) => {
      const result = await cloudinary.uploader.upload(image);
      return { public_id: result.public_id, url: result.secure_url };
    })
  );
  return uploadedImages;
};
exports.updateProject = catchAsyncErrors(async (req, res) => {
  try {
    
    const project = await Project.findById(req.params.projectId)

    if (!project) {
      res.status(404).json({message : "Proje bulunamadı "})
      return 
    }

    project.title = req.body.title || project.title
    project.description  = req.body.description || project.description
    project.thumbnailImage = req.body.thumbnailImage || project.thumbnailImage
    project.webUrl = req.body.webUrl || project.webUrl

       // Upload new images to Cloudinary if provided
       if (req.body.images && req.body.images.length > 0) {
        const uploadedImages = await uploadImagesToCloudinary(req.body.images);
        project.images = uploadedImages;
      }

      await project.save()

    res.status(200).json({ message: "Başarılı şekilde proje güncellendi " });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

exports.addTechnologyToProject = async (req, res) => {
  try {
    const projectId = req.params.projectId; // Assuming you have the project ID in the request parameters
    const techId = req.body.techId; // Assuming you have the technology ID in the request body

    // Check if the project exists
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    // Check if the technology exists
    const tech = await TechFeature.findById(techId);
    if (!tech) {
      return res.status(404).json({ error: "Technology not found" });
    }

    // Push the technology ID into the project's technologies array
    project.technologies.push(techId);

    // Save the updated project
    await project.save();

    res
      .status(200)
      .json({ message: "Technology added to the project successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.removeTechFeatureFromProject = async (req, res) => {
  try {
    const projectId = req.params.projectId; // Assuming you have the project ID in the request parameters
    const techId = req.params.techId; // Assuming you have the tech feature ID in the request parameters

    // Check if the project exists
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    // Check if the tech feature exists
    const techFeature = await TechFeature.findById(techId);
    if (!techFeature) {
      return res.status(404).json({ error: "Tech feature not found" });
    }

    // Remove the tech feature ID from the project's technologies array
    const index = project.technologies.indexOf(techId);
    if (index !== -1) {
      project.technologies.splice(index, 1);
    }

    // Save the updated project
    await project.save();

    res
      .status(200)
      .json({ message: "Tech feature removed from the project successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
