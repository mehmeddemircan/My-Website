const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const User = require("../models/User");
const sendToken = require("../utils/sendToken");
const Comment = require("../models/Comment");
const cloudinary = require('cloudinary')
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

exports.getAllUser = catchAsyncErrors(async (req, res) => {
  try {
    const allUser = await User.find();
    res.status(200).json({
      success: true,
      data: allUser,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

exports.deleteUser = catchAsyncErrors(async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.userId);
    res.status(200).json({
      success: true,
      message: "Başarılı şekilde kullanici silindi ",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// update profile

exports.getUserComments = catchAsyncErrors(async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 4;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const totalComments = await Comment.find({
      userId: req.params.userId,
    }).countDocuments();

    const comments = await Comment.find({ userId: req.params.userId })
      .skip(startIndex)
      .limit(limit);
    res.status(200).json({
      totalComments,
      currentPage: page,
      totalPages: Math.ceil(totalComments / limit),
      results: comments,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Şu anki kullanicin profilini getir /api/profile/me
exports.getUserProfile = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  res.status(200).json({
    success: true,
    user,
  });
});

// Private route, Kullanicin önce giriş yapacak şekilde hesabi güncelleme   => /api/profile/update
exports.updateUserProfile = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.firstname = req.body.firstname || user.firstname;
    user.lastname = req.body.lastname || user.lastname;
    user.email = req.body.email || user.email;
    user.status = req.body.status || user.status ; 
    user.company = req.body.company || user.company ;
    user.biografy = req.body.biografy || user.biografy ; 
    user.city  = req.body.city || user.city ; 
  
    if (req.body.password) {
      user.password = req.body.password;
    }
    // Fotograf oldugunu kontrol et
    if (req.body.avatar) {
      // resimi yükleme işlemi 
      const result = await cloudinary.uploader.upload(req.body.avatar);
      user.avatar.url = result.secure_url;
      user.avatar.public_id = result.public_id;
    }

    const updatedUser = await user.save();

    sendToken(updatedUser, 200, res, "Başarılı Şekilde profil güncellenmiştir");
  } else {
  
    res.status(404).json({
      success: false,
      error: "Kullanıcı bulunamadı , güncelleme olmadı ",
    });
  }
});
