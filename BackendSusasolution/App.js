// app.js
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config");
const userController = require("./Controller/User");
const projectRoute = require("./Router/project");
const userroutes = require('./Router/User')

const bodyParser = require("body-parser");
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.urlencoded({ extended: true })); 

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());
connectDB();

// app.use("/auth",userroutes)
app.use("/signup", userroutes);
app.use("/api/projects", projectRoute);


app.listen(3000, () => {
  console.log("Server started on port 3000");
});
 