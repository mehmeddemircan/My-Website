//Creating a Auth Model in userModel.js
var mongoose = require('mongoose');
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {ObjectId} = mongoose.Schema
var userSchema = new mongoose.Schema({
    firstname: {
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
    password: {
        type: String,
        required : true 
    },
    avatar: {
        public_id: {
          type: String,
        },
        url: {
          type: String,
        },
    },
    comments : [
        {
            type : ObjectId,
            ref : 'Comment'
        }
    ],

    // şifre yenileme özellikleri
    resetPasswordToken: String,
    resetPasswordExpire: Date,
},{timestamps : true });

// Kaydetmeden önce şifreyi hashleme
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
  
    this.password = await bcrypt.hash(this.password, 10);
  });
  
  // Şifreleri karşılastirma işlemi
  userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };
  
  // JWT Token alma işlemi 
  userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION,
    });
  };
  
  userSchema.methods.getResetPasswordToken = function () {
    const resetToken = crypto.randomBytes(20).toString("hex");
  
    // Hash token (private key) and save to database
    this.resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
  
    // Reset Token son kullanma tarihi belirleme 
    this.resetPasswordExpire = Date.now() +   30 * 60 * 1000; // 30 min
  
    return resetToken;
  };
  

var User = mongoose.model('User', userSchema);
module.exports = User;