//replace modelSchema,ModelName with whatever you want
var mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema
var projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true 
    },
    description: {
        type: String,
        required : true 
    },
    thumbnailImage: {
        type: String,
    },
    images: [
        {
          public_id: {
            type: String,
          },
          url: {
            type: String,
          },
        },
    ],
    features : [
        {
            type : String,
        }
    ],
    technologies:[
        {
            type : ObjectId,
            ref : 'TechFeature'
        }
    ],
    webUrl : {
        type : String
    },
    comments : [
        {
            type : ObjectId,
            ref : 'Comment'
        }
    ]
},{timestamps : true});

var Project = mongoose.model('Project', projectSchema);
module.exports = Project;