const User = require("../models/Signup");
const fs = require("fs");
const path = require("path");



exports.createUser = async (req, res) => {
  try {
    const { userRole, email, password } = req.body;
    console.log("fileName", req.file)
      console.log("req.body", req.body);
const panCardImage = {
  data: fs.readFileSync(path.join("./uploads/", req.file.filename)),
  contentType: req.file.mimetype,
};

    const user = new User({ userRole, email, password, panCardImage });
    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating user" });
  }
};


exports.getUser = async (req, res) => {
  try {
    const users = await User.find().exec();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error getting users" });
  }
};


exports.signinUser = async (req, res) => {
  try {
    console.log("req.body=>", req.body);
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    res.json({ message: "User signed in successfully", user: user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error signing in user" });
  }
};