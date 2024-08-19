const express = require("express");
const router = express.Router();
const userController = require("../Controller/User");
const multer = require("multer");
const upload = multer({ dest: "./uploads/" });
const User = require("../models/Signup");
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");

// router.post("/create", upload.fields([
//   { name: "panCardImage", maxCount: 1 },
//   { name: "userRole" },
//   { name: "email" },
//   { name: "password" },
// ]), userController.createUser);

router.post(
  "/create",
  upload.single("panCardImage"),
  userController.createUser
);

router.post("/signin", userController.signinUser);
router.get("/all", userController.getUser);
 
module.exports = router;
