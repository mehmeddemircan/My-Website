//replace modelSchema,ModelName with whatever you want
var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
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
    director: {
        type: String,
        required : true 
    },
   
  
},{timestamps : true });

var Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;