const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Comment = require("../models/Comment");
const Project = require("../models/Project");
const User = require("../models/User");

exports.createComment = catchAsyncErrors(async (req, res) => {
  try {
    const newComment = new Comment(req.body);
    const savedComment = await newComment.save();

    // Push the saved comment to the user's comments array
    const userId = req.body.userId; // Assuming you have the user's ID available
    const user = await User.findById(userId);
    user.comments.push(savedComment);
    await user.save();

    const projectId = req.body.projectId;
    const project = await Project.findById(projectId);
    project.comments.push(savedComment);
    await project.save();

    res.status(200).json({
      success: true,
      data: savedComment,
      message: "Başarılı şekilde yorum oluşturuldu ",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

exports.getAllComment = catchAsyncErrors(async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const totalComments = await Comment.countDocuments();
    const comments = await Comment.find({
      projectId: req.params.projectId,
      parentCommentId: null,
    })
      .skip(startIndex)
      .limit(limit);

    res.status(200).json({
      totalComments,
      currentPage: page,
      totalPages: Math.ceil(totalComments / limit),
      results: comments,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

exports.getCommentReplies = catchAsyncErrors(async (req, res) => {
  try {
    const commentReplies = await Comment.find({
      parentCommentId: req.params.commentId,
    })  
    res.status(200).json({
      data: commentReplies,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

exports.deleteComment = catchAsyncErrors(async (req, res) => {
  try {
    // Remove the comment ID from the user's comments array
    const userId = req.body.userId; // Assuming you have the user's ID available
    const user = await User.findById(userId);

    // Find the index of the comment ID in the user's comments array
    const commentIndex = user.comments.findIndex(
      (comment) => comment.toString() === req.params.commentId
    );

    // Remove the comment ID from the user's comments array
    if (commentIndex !== -1) {
      user.comments.splice(commentIndex, 1);
    }

    await user.save();

    // Remove the comment ID from the user's comments array
    const projectId = req.body.projectId; // Assuming you have the user's ID available
    const project = await Project.findById(projectId);

    // Find the index of the comment ID in the user's comments array
    const commentProjectIndex = project.comments.findIndex(
      (comment) => comment.toString() === req.params.commentId
    );

    // Remove the comment ID from the user's comments array
    if (commentProjectIndex !== -1) {
      project.comments.splice(commentProjectIndex, 1);
    }

    await project.save();

    await Comment.findByIdAndDelete(req.params.commentId);
    res
      .status(200)
      .json({ success: true, message: "Başarılı şekilde yorum silindi " });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

exports.updateComment = catchAsyncErrors(async (req, res) => {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.commentId,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      data: updatedComment,
      message: "Başarılı şekilde yorum güncellendi ",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
