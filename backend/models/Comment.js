//replace modelSchema,ModelName with whatever you want
var mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema
var commentSchema = new mongoose.Schema({
    text: {
        type: String,
        required : true 
    },
    projectId : {
        type: ObjectId, 
        ref: 'Project' 
    },
    userId: {
        type: ObjectId, 
        ref: 'User' 
    },
    parentCommentId: {
        type: ObjectId, 
        ref: 'Comment' 
    }
   
},{timestamps: true});

var Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;