const mongoose = require("mongoose");
// const multer = require("multer");
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: false,
    unique: [true, "Phone number already exists"],
  },
  emailId: {
    type: String,
    required: true,
    unique: [true, "Email ID already exists"],
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
    unique: [true, "UserID already exists"],
  },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
