/* Empty JS object to act as endpoint for all routes */
projectData = {};

/* Express to run server and routes */
const express = require("express");

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require("body-parser");
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("website"));
const cors = require("cors");
app.use(cors());

/* Initialize the main project folder*/

const port = 3000;
/* Spin up the server*/
const server = app.listen(port, listening);
function listening() {
  // console.log(server);
  console.log(`running on localhost: ${port}`);
}

// GET route
app.get("/all", sendData);

function sendData(request, response) {
  response.send(projectData);
}

// POST route
app.post("/add", callBack1);

function callBack1(req, res) {
  res.send("POST received");
  console.log(res);
}

const data = [];
app.post("/addMovie", addMovie);
function addMovie(req, res) {
  data.push(req.body);
  console.log(data);
}

// app.post("/add", function (request, response) {
//   let data1 = request.body;
//   console.log(data1);
// });
// app.post("/addAnimal", makeData);
// function makeData(req, res) {
//   let newData = req.body;
//   let newEntry = {
//     animal: newData.animal,
//     score: newData.score,
//   };
//   data.push(newEntry);
//   // console.log(data);
// }
// app.get("/addMovie", addMovieGet);
// function addMovieGet(req, res) {
//   res.send(data);
//   // console.log(data);
// }
// console.log(projectData);
// const fakeData = {
//   animal: "lion",
//   fact: "lions are great",
// };
// app.get("/fakeAnimalData", getFakeData);
// function getFakeData(req, res) {
//   res.send(fakeData);
// }
