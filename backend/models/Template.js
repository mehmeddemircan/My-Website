//replace modelSchema,ModelName with whatever you want
var mongoose = require('mongoose');

var templateSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    thumbnailImage : {
        type : String
    },
    url: {
        type: String,
    }
 
},{timestamps : true });

var Template = mongoose.model('Template', templateSchema);
module.exports = Template;