projectData = {};
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors());
app.use(express.static("website"));
const port = 3000;
const server = app.listen(port, listening);
function listening() {
  console.log(`running on port${port}`);
}
const data = [];
app.post("/addAnimal", addAnimal);
function addAnimal(req, res) {
  data.push(req.body);
  console.log(data);
}
app.post("/add", callBack1);

function callBack1(req, res) {
  res.send("body");
  console.log(res);
}

app.post("/addMovie", addMovie);
function addMovie(req, res) {
  data.push(req.body);
  console.log(data);
}
app.get("/all", sendData);

function sendData(request, response) {
  response.send(data);
}
