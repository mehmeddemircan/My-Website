
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const User = require("../models/User");
const sendToken = require("../utils/sendToken");


// kayıt olma işlemi
exports.register = catchAsyncErrors(async (req, res, next) => {
  const { firstname, lastname, email, password } = req.body;

  // isim , soyisim , email ve şifre girilip girilmediğini kontrol et
  if (!firstname || !lastname || !email || !password) {
    res.status(400).json({
      success: false,
      error: "Lütfen bütün alanları doldurun",
    });
  }

  const _user = await User.findOne({ email });
  // email kontrolu
  if (_user) {
    res.status(400).json({
      success: false,
      error: "Bu Email zaten kullanılmakta Lütfen başka email giriniz ",
    });
  }
  // kullanici oluşturma
  const user = await User.create({
    firstname,
    lastname,
    email,
    password,
  });
  // token oluşturma 
  sendToken(user, 201, res, "Başarılı şekilde hesap oluşturuldu ");
});

// giriş yapma controller
exports.login = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

    // email ve şifreyi null olup olmadıgını kontrol et
  if (!email || !password) {
    res.status(400).json({
      success: false,
      error: "Lütfen email ve şifre alanlarını doldurunuz ",
    });
  }

  // kullanici bulma işlemi 
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    res.status(400).json({
      success: false,
      error: "Geçersiz email veya şifre tekrar deneyiniz",
    });
  }

  // şifreyi doğru olup olmadığını kontrol etme işlemi 
  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    res.status(400).json({
      success: false,
      error: "Geçersiz şifre",
    });
  }
  // token oluşturma ve cevap gönderme 
  sendToken(user, 201, res, "Başarılı Şekilde hesaba girildi ");
});


exports.getAllUser = catchAsyncErrors(async(req,res) => {
    try {


        const allUser = await User.find()
        res.status(200).json({
            success : true ,
            data : allUser
        })

    } catch (error) {
        res.status(500).json({error : error.message})
    }
})

exports.deleteUser = catchAsyncErrors(async(req,res) => {
    try {
            await User.findByIdAndDelete(req.params.userId)
            res.status(200).json({
                success : true ,
                message :'Başarılı şekilde kullanici silindi '
            })
    } catch (error) {
        res.status(500).json({error : error.message})
    }
})

// update profile 


exports.getUserComments = catchAsyncErrors(async(req,res) => {
    try {
      const page = parseInt(req.query.page) || 1; 
  const limit = parseInt(req.query.limit) || 4; 

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const totalComments = await Comment.find({userId : req.params.userId}).countDocuments();

  const comments = await Comment.find({userId : req.params.userId}).skip(startIndex).limit(limit);
  res.status(200).json({
    totalComments,
      currentPage : page ,
      totalPages: Math.ceil(totalComments / limit),
      results: comments
  })
    } catch (error) {
        res.status(500).json({error : error.message})
    }
})