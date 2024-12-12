// ! ******************** Global Variables ********************

// Input
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");

// variables
let allRecipes = [];
// ! ******************** Global Functions ********************
searchInput.addEventListener("input",function(){
  let searchValue = searchInput.value;
  console.log(searchValue);
  getRecipes(searchValue);
})

searchBtn.addEventListener("click",function(){
  let searchValue = searchInput.value;
  console.log(searchValue);
  getRecipes(searchValue);
})


// AJAX Function

function getRecipes(meal = "pizza") {
  let http = new XMLHttpRequest();
  http.open("GET", `https://forkify-api.herokuapp.com/api/search?q=${meal}`);
  http.send();
  http.responseType = "json";
  http.addEventListener("load", function () {
    if (http.status >= 200 && http.status < 300) {
      allRecipes = http.response.recipes;
      displayRecipes();
      // console.log(allRecipes);
    }
  });
  http.addEventListener("error", function () {
    console.log("Error");
  });
}



function displayRecipes() {
  let recipesContainer = "";
  for (let i = 0; i < allRecipes.length; i++) {
    recipesContainer += `
    <div class="col-md-3">
        <div class="card">
          <img class="card-img-top" src="${allRecipes[i].image_url}" alt="${
      allRecipes[i].title
    }"  height="200" />
          <div class="card-body">
            <h3 class="card-title h5">${allRecipes[i].title
              .split(" ", 3)
              .join(" ")}</h3>
          </div>
        </div>
              
    </div>
    `;
  }

  document.getElementById("recipesData").innerHTML = recipesContainer;
}
