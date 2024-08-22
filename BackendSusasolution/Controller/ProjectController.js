
const Project = require("../Models/Project");
const upload = require("../Middleware/upload");
const fs = require('fs')
 const path = require("path"); 

// Create a new project  
exports.createProject = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const { title, link, description } = req.body; 
    console.log("req.body", req.body); 
    const image = {
      data: fs.readFileSync(path.join("./uploads/", req.file.filename)),
      contentType: req.file.mimetype,
    };
    console.log("image", image, "req.file.filename", req.file.filename);

    const project = new Project({ title, link, description, image });
    await project.save();
    res.status(201).json({ message: "Project created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating project" });
  }
};
// Get all projects
exports.getProjects = async (req, res) => {
  try { 
    const projects = await Project.find().exec();
    res.json(projects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error getting projects" });
  }
};

// Get a single project by ID
exports.getProject = async (req, res) => {
  try {
    const id = req.params.id;
    const project = await Project.findById(id).exec();
    if (!project) {
      res.status(404).json({ message: "Project not found" });
    } else {
      res.json(project);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error getting project" });
  }
};

// Update a project
exports.updateProject = async (req, res) => {
  try {
    const id = req.params.id;
    const project = await Project.findById(id);
    if (!project) {
      res.status(404).json({ message: "Project not found" });
    } else {
      const { title, link, description } = req.body;
      project.title = title;
      project.link = link;
      project.description = description;

      if (req.file) {
        const images = {
          data: fs.readFileSync(path.join("./uploads/", req.file.filename)),
          contentType: req.file.mimetype,
        };
        project.image = images;
      }

      await project.save();
      res.json({ message: "Project updated successfully" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating project" });
  }
};
// Delete a project
exports.deleteProject = async (req, res) => {
  try {
    console.log("req.params.id",req.params.id);
    const id = req.params.id;
    await Project.findByIdAndDelete(id);
    res.json({ message: "Project deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error deleting project" });
  }
};
