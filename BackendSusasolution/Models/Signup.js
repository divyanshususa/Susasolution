const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userRole: String,
  email: String,
  password: String,
  panCardImage: {
    data: Buffer,
    contentType: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
