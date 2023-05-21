//replace modelSchema,ModelName with whatever you want
var mongoose = require('mongoose');

var techFeatureSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true 
    },
   
},{timestamps : true });

var TechFeature = mongoose.model('TechFeature', techFeatureSchema);
module.exports = TechFeature;