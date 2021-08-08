var url = "http://www.omdbapi.com/?apikey=90bacda2&t=";
var div1 = document.createElement("div");
div1.setAttribute("id", "main");
div1.setAttribute("class", "container-fluid");
div1.innerHTML = `<h1 class ="text-center mt-5">Movie Info App</h1>


<div class = 'form-group'>
<label for="Movie">Movie Name</label>
<input class="form-control moviedata" type="text"  id="title-moviedata"  placeholder =" Movie name......" required>

</div>
<div class = 'form-group'>
<button class =" btn btn-primary btn-block"  onclick="data()" >Search</button>
</div>

   

`;

var result = document.createElement("div");
result.setAttribute("class", "cards mt-5 ml-5 text-center  ");
div1.append(result);

document.body.append(div1);

//console.log(moviename)

async function data() {
  var moviename = document.getElementById("title-moviedata").value;
  console.log(moviename);
  if(moviename === ""){
   alert('Enter the movie name!')
  }

  let res = await fetch(url + moviename);

  let data = await res.json();
  clear();
  display(data);
}

var display = (data) => {
  console.log(data);
  if (data.Title=== undefined) {
    result.innerHTML = `<p>${data.Error}</p>`;
  } else {
    result.innerHTML = `
   <img class="img-thumbnail img-responsive" width="150" height="150" src="${data.Poster}">
   <h2 class="mt-5"> ${data.Title}</h2>
   <b>${data.Title}/Cast&Crew</b>
   <h6> ${data.Actors}</h6>
  <b> Directed by</b>
   <h6>  ${data.Director}</h6>
   
   <h6> Released on ${data.Released}</h6>
   
   <h6> Runtime: ${data.Runtime}</h6>
   <h6> ${data.Genre}</h6>
   <h6> IMDB-Rating : ${data.imdbRating}</h6>
   <p></p>
   
   `;
  }
};

var clear = () => {
  document.getElementById("title-moviedata").value = "";
};
