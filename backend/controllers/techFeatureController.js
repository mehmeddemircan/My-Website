const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const TechFeature = require("../models/TechFeature");


exports.createTechFeature = catchAsyncErrors(async(req,res) => {
    try {
        
        const newTechFeature = new TechFeature(req.body)

        await newTechFeature.save()
        res.status(200).json({message : 'Başarılı Şekilde Teknoloji oluşturuldu '})


    } catch (error) {
        res.status(500).json({error : error.message})
    }
})

exports.getAllTechFeature = catchAsyncErrors(async(req,res) => {
    try {
        
        const technologies = await TechFeature.find()
        res.status(200).json(technologies)

    } catch (error) {
        res.status(500).json({error : error.message})
    }
})

exports.deleteTechFeature = catchAsyncErrors(async(req,res) => {
    try {

        await TechFeature.findByIdAndDelete(req.params.techId)
        res.status(200).json({message : 'Başarılı Şekilde Teknoloji silindi'})

    } catch (error) {
        res.status(500).json({error : error.message})
    }
})

exports.updateTechFeature = catchAsyncErrors(async(req,res) => {
    try {
        
        await TechFeature.findByIdAndUpdate(req.params.techId,{$set : req.body},{new : true })
        res.status(200).json({message : 'Başarılı Şekilde Teknoloji güncellendi '})

    } catch (error) {
        res.status(500).json({error : error.message})
    }
})