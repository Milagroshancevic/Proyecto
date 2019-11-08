window.onload = function() {


  var queryString = location.search;
   // location es toda tu url y el search busca parametros a paratir del signo de pregunta
  var queryStringSerie = new URLSearchParams(queryString);
   var idSeries = queryStringSerie.get('id');

fetch("https://api.themoviedb.org/3/discover/tv?api_key=4c34fda4463cc4b5610955320cdc1b52&page=1&with_genres=" + idSeries
)
.then(function(respu){
  return respu.json();
})
.then(function(respuDatos){
  console.log(respuDatos);
  var seriesGenero = document.querySelector(".seriesGenero")
  var listaGen = respuDatos.results

  for(var i=0; i<respuDatos.results; i++){
    seriesGenero.innerHTML +=  '<img src="' + "https://image.tmdb.org/t/p/original/" + respuDatos[i].poster_path + '">' + '<p>' + respuDatos[i].id + '</p>'
  }

})













































































































}
