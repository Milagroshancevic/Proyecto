window.onload = function() {


  var queryStringGeneros = location.search;
   // location es toda tu url y el search busca parametros a paratir del signo de pregunta
  var queryStringSerie = new URLSearchParams(queryStringGeneros);
   var idSeries = queryStringSerie.get('id');

   fetch ("https://api.themoviedb.org/3/genre/tv/list?api_key=4c34fda4463cc4b5610955320cdc1b52")
   .then(function(respuestaTitulo){
     return respuestaTitulo.json();
   })
   .then(function(datosTitulo){
     var generosTitulo= datosTitulo.genres;
     var titulopag = document.querySelector(".titulopag");

     console.log(datosTitulo);
     console.log(generosTitulo);

       titulopag.innerText += "Series de " + datosTitulo.name

   })

fetch("https://api.themoviedb.org/3/discover/tv?api_key=4c34fda4463cc4b5610955320cdc1b52&page=1&with_genres=" + idSeries
)
.then(function(respu){
  return respu.json();
})
.then(function(respuDatos){
  console.log(respuDatos);
  var seriesGeneroS = document.querySelector(".seriesGeneroS")
  var listaGen = respuDatos.results

  for(var i=0; i<listaGen.length; i++){
    seriesGeneroS.innerHTML += '<li><img src="' + "https://image.tmdb.org/t/p/original/" + listaGen[i].poster_path + '"> </li>'

  }

})















































































































}
