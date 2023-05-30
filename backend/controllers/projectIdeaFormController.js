const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const ProjectIdeaForm = require("../models/ProjectIdeaForm");

exports.sendProjectIdeaForm = catchAsyncErrors(async(req,res) => {
    try {

        const newIdeaForm = new ProjectIdeaForm(req.body)
        const savedIdeaForm = await newIdeaForm.save()
        res.status(200).json({
            success : true ,
            data : savedIdeaForm,
            message : 'Başarılı şekilde proje fikrinizi aldık , sizinle iletişime gecilecektir '
        })

    } catch (error) {
        res.status(500).json({error : error.message});
    }
})

exports.getAllProjectIdeaForm = catchAsyncErrors(async(req,res) => {
    try {
        
        const projectIdeas = await ProjectIdeaForm.find()
        res.status(200).json({
            success : true ,
            data : projectIdeas
        })

    } catch (error) {
        res.status(500).json({error : error.message})
    }
})

exports.getUserProjectIdeaForms = catchAsyncErrors(async(req,res) => {
    try {
        
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 4;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
    
        const totalProjectIdeas = await ProjectIdeaForm.find({user : req.params.userId}).countDocuments();
        const projectIdeaForms = await ProjectIdeaForm.find({user : req.params.userId}).skip(startIndex).limit(limit);
    
        res.status(200).json({
            totalProjectIdeas,
          currentPage: page,
          totalPages: Math.ceil(totalProjectIdeas / limit),
          results: projectIdeaForms,
        });

    } catch (error) {
        res.status(500).json({error : error.message})
    }
})

exports.updateProjectIdeaForm = catchAsyncErrors(async(req,res) => {
    try {
        

        const updatedForm  = await ProjectIdeaForm.findByIdAndUpdate(req.params.formId,{$set : req.body},{new : true })
        res.status(200).json({
            success : true ,
            data : updatedForm,
            message : 'Başarılı şekilde formunuzu güncelledik '
        })

    } catch (error) {
        res.status(500).json({error : error.message})
    }
})


exports.deleteProjectIdeaForm = catchAsyncErrors(async(req,res) => {
    try {

        await ProjectIdeaForm.findByIdAndDelete(req.params.formId)
        res.status(200).json({
            success : true ,
            message : 'Başarılı şekilde formunuzu kaldırdık. Bu Formun önemi kaldırılmiştır '
        })

    } catch (error) {
        res.status(500).json({error : error.message})
    }
})
