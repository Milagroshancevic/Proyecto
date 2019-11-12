var queryStringS= location.search;
var searchParams= new URLSearchParams (queryStringS);
var search= searchParams.get("search");

// var url=.....
// en la url le agregamos con + + la variable que tiene la infomacion que en este caso es search

fetch("https://api.themoviedb.org/3/search/movie?api_key=4c34fda4463cc4b5610955320cdc1b52&query="+ search)
.then(function(respuestaSearch){
return respuestaSearch.json();

})
.then(function(datosSearch){
var resultadoSearch = document.querySelector(".resultadoSearch");
var datosFinales= datosSearch.results;
console.log(datosFinales)
var lista = "" ;
//  (lo que hacemos con el for es llenar esta variable que esta vacia)

for(var i=0; i<datosSearch.results[i].lenght; i++){
  // resultadoSearch.innerHTML += '<li>'+ datosFinales[i].id +'</li>'
  // console.log(datosFinales[i].name);

lista += '<li>'+ datosFinales[i].id +'</li>'
lista += '<li>'+ datosFinales[i].title +'</li>'
lista += '<li><img src="' + "https://image.tmdb.org/t/p/original/" + datosFinales[i].poster_path +'"> </li>'
resultadoSearch.innerHTML += lista;
}
// aca el problema esta en como agragarlo al html, nose pq no me deja


})
