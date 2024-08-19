
const mongoose = require("mongoose")
require("dotenv").config();


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MongoDb, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.log("error", err);
  }
};


module.exports = connectDB