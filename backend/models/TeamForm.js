//replace modelSchema,ModelName with whatever you want
var mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema
var teamFormSchema = new mongoose.Schema(
  {
    user : {
      type : ObjectId,
      ref : 'User',

    },

    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String

    },
    departments: [
      {
        type: String,
        required: true,
      },
    ],
    additionalInfo: {
      type: String,
    },
    //profile picture 
    // cv upload
  },
  { timestamps: true }
);

var TeamForm = mongoose.model("TeamForm", teamFormSchema);
module.exports = TeamForm;
