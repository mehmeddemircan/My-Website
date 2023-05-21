//replace modelSchema,ModelName with whatever you want
var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
    text: {
        type: String,
        required : true 
    },
   
},{timestamps: true});

var Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;