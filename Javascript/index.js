window.onload = function () {
//Al aire hoy//
  fetch ("https://api.themoviedb.org/3/tv/airing_today?api_key=4c34fda4463cc4b5610955320cdc1b52&language=en-US")
  .then(function(respuesta){
    return respuesta.json();
  })
  .then(function(datos){
    var seriesAire = datos.results;
    var listaire= document.querySelector(".listaire");
    //console.log(seriesAire);

    for(var i=0; i<seriesAire.length; i++) {
      listaire.innerHTML += '<p>' + seriesAire[i].name + '</p>' + '<img src="' + "https://image.tmdb.org/t/p/original/" + datos.results[i].backdrop_path + '">'
    }

  })




























fetch ("https://api.themoviedb.org/3/tv/popular?api_key=4c34fda4463cc4b5610955320cdc1b52&page=1")
.then(function(respuestaP){
return respuestaP.json();
})
.then(function(datosP){
  var seriesP= datosP.results;
  var listapopu= document.querySelector(".listapopu");

  for(var i=0; i<seriesP.lenght;i++){
    listapopu.innerHTML += '<p>' + seriesP[i].name + '</p>' + '<img src="' + "https://image.tmdb.org/t/p/original/" + datosP.results[i].backdrop_path + '">'

  }
})




























































































}
