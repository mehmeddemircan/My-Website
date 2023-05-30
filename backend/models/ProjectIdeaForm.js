//replace modelSchema,ModelName with whatever you want
var mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema
var projectIdeaFormSchema = new mongoose.Schema({
    user : {
        type : ObjectId,
        ref : 'User'
    },
    firstname: {
        type: String,
        required : true 
    },
    lastname: {
        type: String,
        required : true 
    },
    email: {
        type: String,
        required : true 
    },
    phoneNumber: {
        type: String,
    },
    projectIdea: {
        type: String,
        required : true 
    },
},{timestamps : true });

var ProjectIdeaForm = mongoose.model('ProjectIdeaForm', projectIdeaFormSchema);
module.exports = ProjectIdeaForm;