const postData = async (url = "", data = {}) => {
  // console.log(data);
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};
// postData("/addAnimal", { animal: "lion" });
// postData("/addMovie", { movie: "matrix", score: 5 });
postData("/add", { num: 42 });

const getData = async (url = "") => {
  const request = await fetch(url);
  try {
    // Transform into JSON
    const allData = await request.json();
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
};
getData("/all");

//dynamic url
// let baseURL = "https://api.nasa.gov/planetary/apod?api_key=";
// let apiKey = "h7i4DsgM2rAB8fsKQ09hjDlctNxG8uTcl9udiG7X";
// const newAnimal = document.getElementById("animal").value;
// console.log(newAnimal);
// document.getElementById("generate").addEventListener("click", performAction);

// function performAction(e) {
//   getAnimalDemo(baseURL, newAnimal, apiKey);
// }

// const getAnimalDemo = async (baseURL, animal, key) => {
//   // 1.
//   // const res = await fetch(baseURL + animal + key);
//   // 2. Call Fake API
//   const res = await fetch('/fakeAnimalData')
//   try {
//     const data = await res.json();
//     console.log(data);
//     // 1. We can do something with our returned data here-- like chain promises!

//     // 2.
//     // postData('/addAnimal', data)
//   } catch (error) {
//     // appropriately handle the error
//     console.log("error", error);
//   }
// };
////////////use of then
// let baseURL = "https://api.nasa.gov/planetary/apod?api_key=";
// const newAnimal = document.getElementById("animal").value;
// console.log(newAnimal);
// document.getElementById("generate").addEventListener("click", performAction);
// function performAction(e) {
//   const fav = document.getElementById("favorite").value;
//   //fake api call
//   getAnimal("/fakeAnimalData").then(function (data) {
//     console.log(data);
//     postData("/addAnimal", {
//       animal: data.animal,
//       fact: data.fact,
//       fav: fav,
//     });
//   });
// }
// const getAnimal = async (url) => {
//   const res = await fetch(url);
//   try {
//     const data = await res.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log("error", error);
//   }
// };

// ////////////////////
// function postGet() {
//   postData("/animal", { fav: "lion" }).then(function (data) {
//     retrieveData("/all");
//   });
// }
// postGet();
//////////////updating ui elements
document.getElementById("generate").addEventListener("click", performAction);
function performAction(e) {
  const newAnimal = document.getElementById("animalName").value;
  const animalFact = document.getElementById("animalFact").value;
  const favFact = document.getElementById("animalFav").value;
  const getAnimal = async (url) => {
    const res = await fetch(url);
    try {
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log("error", error);
    }
  };
  getAnimal("/animalData")
    // New Syntax!
    .then(function (data) {
      // Add data
      console.log(data);
      postData("/addAnimal", {
        animal: newAnimal,
        fact: animalFact,
        fav: favFact,
      });
    })
    .then(updateUI());
}

const updateUI = async () => {
  const request = await fetch("/all");
  try {
    const allData = await request.json();
    document.getElementById("animalName").innerHTML = allData[0].animal;
    document.getElementById("animalFact").innerHTML = allData[0].facts;
    document.getElementById("animalFav").innerHTML = allData[0].fav;
  } catch (error) {
    console.log("error", error);
  }
};
