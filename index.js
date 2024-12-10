function search(){
  let movieNameTag = document.getElementById("movieName");

  let movie = movieNameTag.value;

  console.log(movie);

  //f61442c3
  let httpRequest = new XMLHttpRequest();
  httpRequest.open("GET","http://www.omdbapi.com/?apikey=f61442c3&t="+movie)
  httpRequest.send();
  httpRequest.responseType = "json";
  httpRequest.onload = () =>{
    let response = httpRequest.response;
    console.log(response);

    let posterTag = document.getElementById("poster");

    posterTag.src = response.Poster;

    let plotTag = document.getElementById("plot");

    plotTag.innerText = response.Plot;


  }

    
}


