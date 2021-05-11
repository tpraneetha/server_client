const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

postData("/addMovie", { movie: "matrix", score: 5 });
// const getData = async (url = "", data = {}) => {
//   console.log(data);
//   const response = await fetch(url, {
//     method: "GET",
//     credentials: "same-origin",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     // Body data type must match "Content-Type" header
//     // body: JSON.stringify(data),
//   });

//   try {
//     const newData = await response.json();
//     // console.log(newData);
//     return newData;
//   } catch (error) {
//     console.log("error", error);
//   }
// };

postData("/add", { answer: 42 });
// postData("/addAnimal", { animal: "elephant", score: 10 });
// // getData("/");
// let baseUrl = "https://api.nasa.gov/planetary/apod?api_key=";
// // let baseUrl = "http://api.animalinfo.org/data/?animal=";
// let apiKey = "h7i4DsgM2rAB8fsKQ09hjDlctNxG8uTcl9udiG7X";
// // let apiKey = "&appid=9f15e45060...";
// const newAnimal = document.getElementById("animal").value;
// document.getElementById("btnGenerate").addEventListener("click", performAction);
// function performAction(e) {
//   getAnimalDemo(baseUrl, newAnimal, apiKey);
// }
// const getAnimalDemo = async (baseUrl, animal, key) => {
//   //   const res = await fetch(baseUrl + animal + key);
//   const res = await fetch("/fakeAnimalData");
//   try {
//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log("error", error);
//   }
// };
