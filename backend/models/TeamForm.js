//replace modelSchema,ModelName with whatever you want
var mongoose = require("mongoose");

var teamFormSchema = new mongoose.Schema(
  {
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
    department: [
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
