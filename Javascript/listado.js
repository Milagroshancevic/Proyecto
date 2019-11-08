window.onload= function () {

fetch ("https://api.themoviedb.org/3/genre/tv/list?api_key=4c34fda4463cc4b5610955320cdc1b52")
.then(function(respuestaG){
  return respuestaG.json();
})
.then(function(datosG){
  var generos= datosG.genres;
  var listaGeneros = document.querySelector(".listaGeneros");
  console.log(generos);
  console.log(listaGeneros);



  for(var i=0; i<generos.length; i++){
    listaGeneros.innerHTML += '<a class="hipervinculo" href="series.html?id='+ datosG.genres[i].id+'">' + datosG.genres[i].name + '</a>'+ '<p class="id">' + generos[i].id + '</p>' + '<p>' 
  }
})









































}
