$(document).ready(function () {
  $("#searchBox").on("submit", (e) => {
    let searchText = $("#search").val();
    getMovies(searchText);
    e.preventDefault();
  });
});

function getMovies(searchText) {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://www.omdbapi.com/?t=${searchText}&apikey=6c9cf904`,
    true
  );
  xhr.onload = function () {
    let text = "";
    let imgP;
    if (this.status == 200) {
      const response = JSON.parse(this.responseText);

      imgP = `<img src ="${response.Poster}" 
      alt="poster"/>`;

      text += `<div>
         <h3>${response.Title}</h3>
         <ul>
             <li>Year : ${response.Year}</li>
             <li>Realeased : ${response.Released}</li>
             <li>Runtime : ${response.Runtime}</li>
             <li>Genre :${response.Genre}</li>
             <li>Director : ${response.Director}</li>
             <li>Actor : ${response.Actors}</li>
             <li>Language : ${response.Language}</li>
             <li>Country : ${response.country}</li>
             <li>imdbRating :${response.imdbRating}</li>
            
         </ul>
      </div>`;

      var x = document.getElementById("img");
      let txt = document.getElementById("textOutput");
      x.innerHTML = imgP;
      txt.innerHTML = text;
    } else {
      img = `<img src = "./error.png"  alt = "error"/>`;
      text = `<h2>Incorrect name</h2>`;
    }
  };

  xhr.send();
}
