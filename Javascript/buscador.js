window.onload = function() {

var queryStringS= location.search;
var searchParams= new URLSearchParams (queryStringS);
var search= searchParams.get("search");


fetch("https://api.themoviedb.org/3/search/tv?api_key=4c34fda4463cc4b5610955320cdc1b52&query="+ search)
.then(function(respuestaSearch){
return respuestaSearch.json();

})


.then(function(datosSearch){
  var datosFinales= datosSearch.results;
  var resultadoSearch =   document.querySelector(".resultadoSearch");
  console.log(datosFinales);


for(var i=0; i<datosFinales.length; i++){

  resultadoSearch.innerHTML += '<li><a class="sereiesBuscadas" href="' + "detalle.html?id="+ datosFinales[i].id +'">' + '<img class="posterBuscado" src=" ' + "https://image.tmdb.org/t/p/original/" + datosFinales[i].poster_path + '">' + '</a></li>'


}

if( datosFinales.length == 0){
  alert("Lo siento, no hemos encontrado resultado para " + search + ". Intente con otra busqueda")
}

// if( datosFinales.title.indexOf("null")!== -1){
//   alert("Lo siento no hemos encontrado resultado para" + search + ". Intente con otra busqueda")
// }

})





































}
