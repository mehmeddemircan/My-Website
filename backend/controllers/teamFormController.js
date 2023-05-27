const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const TeamForm = require("../models/TeamForm");

exports.sendTeamForm = catchAsyncErrors(async(req,res) => {
    try {

        const newTeamForm = new TeamForm(req.body);
        const savedTeamForm = await newTeamForm.save()
        res.status(200).json({
            success : true ,
            data : savedTeamForm,
            message : 'Başarılı Şekilde formunuzu aldık, Değerlendirip size geri dönüş yapılacaktır '
        })

    } catch (error) {
        res.status(500).json({error : error.message});
    }
})

exports.deleteTeamForm = catchAsyncErrors(async(req,res) => {
    try {
        await TeamForm.findByIdAndDelete(req.params.formId)
        res.status(200).json({
            success : true ,
            message : 'Ekibe katılma formunuz başarılı şekilde silindi '
        })

    } catch (error) {
        res.status(500).json({error : error.message});
    }
})

exports.updateTeamForm = catchAsyncErrors(async(req,res) => {

    try {
        await TeamForm.findByIdAndUpdate(req.params.formId,{$set: req.body},{new : true })
        res.status(200).json({
            success : true ,
            message : 'Ekibe katılma formunuz başarılı şekilde Güncellendi '
        })
    } catch (error) {
        res.status(500).json({error : error.message})
    }

})

exports.getTeamForms = catchAsyncErrors(async(req,res) => {
    try {

        const teamForms = await TeamForm.find()
        res.status(200).json({
            success : true ,
            data : teamForms
        })

    } catch (error) {
        res.status(500).json({
            error : error.message
        })
    }
})

exports.getUserTeamForms = catchAsyncErrors(async(req,res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 4;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
    
        const totalTeamForms = await TeamForm.find({user : req.params.userId}).countDocuments();
        const teamForms = await TeamForm.find({user : req.params.userId}).skip(startIndex).limit(limit);
    
        res.status(200).json({
            totalTeamForms,
          currentPage: page,
          totalPages: Math.ceil(totalTeamForms / limit),
          results: teamForms,
        });

    } catch (error) {
        res.status(500).json({error : error.message})
    }
})