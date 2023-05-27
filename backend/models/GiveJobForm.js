//replace modelSchema,ModelName with whatever you want
var mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema
var giveJobFormSchema = new mongoose.Schema({
    user : {
        type : ObjectId ,
        ref : 'User'
    },
    firstname : {
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
    companyName : {
        type : String,
        required : true 
    },
    city : {
        type : String
    },

    additionalInfo: {
        type: String
    },
},{timestamps : true });

var GiveJobForm = mongoose.model('GiveJobForm', giveJobFormSchema);
module.exports = GiveJobForm;