// Project Model (models/Project.js)
const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { type: String },
  link: { type: String },
  description: { type: String },
  image: {
    data: Buffer, 
    contentType:String,
  },
});

module.exports = mongoose.model("Project", projectSchema);
