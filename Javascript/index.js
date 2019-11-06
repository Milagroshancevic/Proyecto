window.onload = function () {
//Al aire hoy//
  fetch ("https://api.themoviedb.org/3/tv/airing_today?api_key=4c34fda4463cc4b5610955320cdc1b52&language=en-US")
  .then(function(respuesta){
    return respuesta.json();
  })
  .then(function(datos){
    var seriesAire = datos.results;
    var listaire= document.querySelector(".listaire");
    console.log(seriesAire);

    for(var i=0; i<seriesAire.length; i++) {
      listaire.innerHTML += '<p>' + seriesAire[i].name + '</p>' + '<a class="alDetalle" href="detalle.html?id=' + seriesAire[i].id+ '">'+ '<img src="' + "https://image.tmdb.org/t/p/original/" + datos.results[i].poster_path + '">' + '</a>'
    }



  })

/* Mejores puntuadas */
  fetch ("https://api.themoviedb.org/3/tv/top_rated?api_key=4c34fda4463cc4b5610955320cdc1b52&page=1")
.then(function(respuestaMP){
  return respuestaMP.json();
})
.then(function(datosMP){
  var seriesMP = datosMP.results;
  var listaMP= document.querySelector(".listaMP");
  //console.log(seriesMP);

  for(var i=0; i<seriesMP.length; i++) {
    listaMP.innerHTML += '<p>' + seriesMP[i].name + '</p>' + '<a class="alDetalle" href="detalle.html">'+ '<img src="' + "https://image.tmdb.org/t/p/original/" + seriesMP[i].poster_path + '">' + '</a>'
  }

})

/* Populares */

fetch ("https://api.themoviedb.org/3/tv/popular?api_key=4c34fda4463cc4b5610955320cdc1b52&page=1")
.then(function(respuestaP){
return respuestaP.json();
})
.then(function(datosP){
var seriesP = datosP.results;
var listaP= document.querySelector(".listaP");
//console.log(seriesMP);

for(var i=0; i<seriesP.length; i++) {
  listaP.innerHTML += '<p>' + seriesP[i].name + '</p>' + '<a class="alDetalle" href="detalle.html">' + '<img src="' + "https://image.tmdb.org/t/p/original/" + seriesP[i].poster_path + '">' + '</a>'
}

})


















































































































}
