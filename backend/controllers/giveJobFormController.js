const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const GiveJobForm = require("../models/GiveJobForm");

//create form controller 
// list them as pagination
// delete 
// update form 


exports.sendGiveJobForm = catchAsyncErrors(async(req,res) => {
    try {

        const newForm = new GiveJobForm(req.body)
        const savedForm = await newForm.save()

        res.status(200).json({
            success : true ,
            data : savedForm ,
            
        })

    } catch (error) {
        res.status(500).json({error : error.message})
    }
})

exports.getGiveJobForms = catchAsyncErrors(async(req,res) => {
    try {

        const jobForms = await GiveJobForm.find()
        res.status(200).json({
            success : true ,
            data : jobForms
        })

    } catch (error) {
        res.status(500).json({
            error : error.message
        })
    }
})


exports.getUserGiveJobForms = catchAsyncErrors(async(req,res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 4;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
    
        const totalGiveJobForms = await GiveJobForm.countDocuments();
        const giveJobForms = await GiveJobForm.find({user : req.params.userId}).skip(startIndex).limit(limit);
    
        res.status(200).json({
            totalGiveJobForms,
          currentPage: page,
          totalPages: Math.ceil(totalGiveJobForms / limit),
          results: giveJobForms,
        });



    } catch (error) {
        res.status(500).json({error : error.message})
    }
})


exports.updateGiveJobForm = catchAsyncErrors(async(req,res) => {
    try {
        

        const updatedForm  = await GiveJobForm.findByIdAndUpdate(req.params.formId,{$set : req.body},{new : true })
        res.status(200).json({
            success : true ,
            data : updatedForm,
            message : 'Başarılı şekilde formunuzu güncelledik '
        })

    } catch (error) {
        res.status(500).json({error : error.message})
    }
})


exports.deleteGiveJobForm = catchAsyncErrors(async(req,res) => {
    try {

        await GiveJobForm.findByIdAndDelete(req.params.formId)
        res.status(200).json({
            success : true ,
            message : 'Başarılı şekilde formunuzu kaldırdık. Bu Formun önemi kaldırılmiştır '
        })

    } catch (error) {
        res.status(500).json({error : error.message})
    }
})
