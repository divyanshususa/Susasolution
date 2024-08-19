// Route (routes/project.js) 
const express = require("express");
const router = express.Router();  
const ProjectController = require("../Controller/ProjectController");
const multer = require("multer");
const upload = multer({ dest: "./uploads/" });

router.post("/create", upload.single("image"), ProjectController.createProject);
router.get("/all", ProjectController.getProjects);
router.get("/:id", ProjectController.getProject);
router.put(
  "/update/:id",
  upload.single("image"),
  ProjectController.updateProject
);
router.delete("/delete/:id", ProjectController.deleteProject);

module.exports = router;
