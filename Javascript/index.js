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
      listaire.innerHTML += '<li class="" id='+ seriesAire[i].id + '><p>' + seriesAire[i].name + '</p>' + '<a class="alDetalle" href="detalle.html?id=' + seriesAire[i].id+ '">'+ '<img src="' + "https://image.tmdb.org/t/p/original/" + datos.results[i].poster_path + '">' + '</a></li>'
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
    listaMP.innerHTML += '<li class="" id='+ seriesMP[i].id + '><p>' + seriesMP[i].name + '</p>' + '<a class="alDetalle" href="detalle.html?id=' + seriesMP[i].id+ '">'+  '<img src="' + "https://image.tmdb.org/t/p/original/" + seriesMP[i].poster_path + '">' + '</a></li>'
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
  listaP.innerHTML += '<li class="" id='+ seriesP[i].id + '><p>' + seriesP[i].name + '</p>' + '<a class="alDetalle" href="detalle.html?id=' + seriesP[i].id+ '">'+  '<img src="' + "https://image.tmdb.org/t/p/original/" + seriesP[i].poster_path + '">' + '</a></li>'
}

})

// favoritos by mili y belu xd


// get favorites from local storage or empty array
var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
console.log(favorites);
// add class 'fav' to each favorite
// favorites.forEach(function(favorite) {
//   document.getElementById(favorite).className = 'fav';
  //
  // });
// register click event listener
document.querySelector('.list').addEventListener('click', function(e) {
  var id = e.target.id,
      item = e.target,
      index = favorites.indexOf(id);
  // return if target doesn't have an id (shouldn't happen)
  if (!id) return;
  // item is not favorite
  if (index == -1) {
    favorites.push(id);
    item.className = '';
  // item is already favorite
  } else {
    favorites.splice(index, 1);
    item.className = 'fav';
  }
  // store array in local storage
  localStorage.setItem('favorites', JSON.stringify(favorites));
});

// local storage stores strings so we use JSON to stringify for storage and parse to get out of storage


















































































































}
