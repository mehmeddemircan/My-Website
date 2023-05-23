const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Blog = require("../models/Blog");

exports.createBlog = catchAsyncErrors(async (req, res) => {
  try {
    const newBlog = new Blog(req.body);
    const savedBlog = await newBlog.save();

    res
      .status(200)
      .json({
        success: true,
        data: savedBlog,
        message: "Başarılı şekilde blog oluşturuldu",
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

exports.getAllBlog = catchAsyncErrors(async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 4;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const totalBlogs = await Blog.countDocuments();
    const blogs = await Blog.find().skip(startIndex).limit(limit);

    res.status(200).json({
      totalBlogs,
      currentPage: page,
      totalPages: Math.ceil(totalBlogs / limit),
      results: blogs,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

exports.getBlogDetails = catchAsyncErrors(async (req, res) => {
  try {
    const blogDetails = await Blog.findById(req.params.blogId);

    res.status(200).json({
      success: true,
      data: blogDetails,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
exports.updateBlog = catchAsyncErrors(async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.blogId,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      success: true,
      data: updatedBlog,
      message: "Başarılı şekilde güncellendi",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

exports.deleteBlog = catchAsyncErrors(async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.blogId);
    res.status(200).json({
      success: true,
      message: "Başarılı şekilde silindi ",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
