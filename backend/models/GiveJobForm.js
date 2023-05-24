//replace modelSchema,ModelName with whatever you want
var mongoose = require('mongoose');

var giveJobFormSchema = new mongoose.Schema({
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
        type : String,
        required : true 
    },

    additionalInfo: {
        type: String,
        required : true 
    },
},{timestamps : true });

var GiveJobForm = mongoose.model('GiveJobForm', giveJobFormSchema);
module.exports = GiveJobForm;