const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Project = require("../models/Project");

exports.createProject = catchAsyncErrors(async (req, res) => {
  try {
    const newProject = new Project(req.body);

    await newProject.save();

    res.status(200).json({ message: "Başarılı şekilde proje oluşturuldu " });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

exports.getProjectsWithPage = catchAsyncErrors(async(req,res) => {
    try {
        const page = parseInt(req.query.page) || 1; // Get the page number from the query parameter, default to 1 if not provided
        const limit = parseInt(req.query.limit) || 4; // Get the limit from the query parameter, default to 10 if not provided
    
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
    
        const totalProjects = await Project.countDocuments();
    
        const allProjects = await Project.find()
          .skip(startIndex)
          .limit(limit);
    
        res.status(200).json({
          totalProjects,
          currentPage: page,
          totalPages: Math.ceil(totalProjects / limit),
          results: allProjects,
        });
    } catch (error) {
        res.status(500).json({error : error.message})
    }
})

exports.getProjectDetails = catchAsyncErrors(async(req,res) => {
    try {
        
        const projectDetails = await Project.findById(req.params.projectId)

        res.status(200).json(projectDetails)

    } catch (error) {
        res.status(500).json({error : error.message})
    }
})

exports.deleteProject = catchAsyncErrors(async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.projectId);
    res.status(200).json({ message: "Başarılı Şekilde proje silindi " });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

exports.updateProject = catchAsyncErrors(async (req, res) => {
  try {
    await Project.findByIdAndUpdate(
      req.params.projectId,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({ message: "Başarılı şekilde proje güncellendi " });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
