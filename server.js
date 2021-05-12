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
const animalData = [];
app.post("/addAnimal", addAnimal);
function addAnimal(req, res) {
  const newEntry = {
    animal: req.body.animal,
    facts: req.body.fact,
    fav: req.body.fav,
  };
  animalData.push(newEntry);
  res.send(animalData);
  console.log(animalData);
}
app.post("/add", callBack1);

function callBack1(req, res) {
  data.push(req.body);
  console.log(data);
}

app.post("/addMovie", addMovie);
function addMovie(req, res) {
  data.push(req.body);
  console.log(data);
}
app.post("/animal", addAnimal);

function addAnimal(req, res) {
  data.push(req.body);
}

app.get("/all", sendData);

function sendData(request, response) {
  response.send(data);
}
const fakeData = {
  animal: "lion",
  fact: "lions are great",
};
app.get("/fakeAnimalData", getFakeData);
function getFakeData(req, res) {
  res.send(fakeData);
}
app.get("/animalData", getAnimalData);
function getAnimalData(req, res) {
  const newEntry = {
    animal: req.body.animal,
    facts: req.body.fact,
    fav: req.body.fav,
  };
  animalData.push(newEntry);
  res.send(animalData);
  console.log(animalData);
}
