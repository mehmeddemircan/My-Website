//replace modelSchema,ModelName with whatever you want
var mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required : true ,
    },
    text: {
        type: String,
        required : true 
    },
},{timestamps : true });

var Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;