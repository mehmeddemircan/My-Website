//replace modelSchema,ModelName with whatever you want
var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required : true 
    },
    description: {
        type: String,
        required : true 
    },
    thumbnailImage: {
        type: String,
        required : true 
    },
    author : {
        type : String,
        required : true 
    }
 
},{timestamps : true });

var Book = mongoose.model('Book', bookSchema);
module.exports = Book;