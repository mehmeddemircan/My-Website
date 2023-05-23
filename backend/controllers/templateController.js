const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Template = require("../models/Template");


exports.createTemplate = catchAsyncErrors(async(req,res) => {
    try {

        const newTemplate = new Template(req.body)
        const savedTemplate = await newTemplate.save()
        res.status(200).json({
            success : true ,
            data : savedTemplate,
            message : 'Başarıli şekilde template oluşturuldu '
        })

    } catch (error) {
        res.status(500).json({error : error.message});
    }
})
exports.getAllTemplate = catchAsyncErrors(async(req,res) => {
    try {

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 4;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
    
        const totalTemplates = await Template.countDocuments();
        const templates = await Template.find().skip(startIndex).limit(limit);
    
        res.status(200).json({
            totalTemplates,
          currentPage: page,
          totalPages: Math.ceil(totalTemplates / limit),
          results: templates,
        });

    } catch (error) {
        res.status(500).json({error : error.message})
    }
})
exports.deleteTemplate = catchAsyncErrors(async(req,res) => {

    try {
        
        await Template.findByIdAndDelete(req.params.templateId)
        res.status(200).json({
            success : true ,
            message : 'Başarılı şekilde template silindi '
        })

    } catch (error) {
        res.status(500).json({error : error.message})
    }
})

exports.updateTemplate = catchAsyncErrors(async(req,res) => {
    try {
        
        const updatedTemplate = await Template.findByIdAndUpdate(req.params.templateId,{$set : req.body},{new : true })

        res.status(200).json({
            success : true ,
            data : updatedTemplate,
            message : 'Başarılı şekilde template güncellendi'
        })

    } catch (error) {
        res.status(500).json({error : error.message})
    }
})