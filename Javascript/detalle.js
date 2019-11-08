window.onload = function (){


  // detalles

  var queryString = location.search;
   // location es toda tu url y el search busca parametros a paratir del signo de pregunta
  var queryStringObj = new URLSearchParams(queryString);
   var idDetalle = queryStringObj.get('id');



//continuo con detalles
fetch("https://api.themoviedb.org/3/tv/"+ idDetalle +"?api_key=4c34fda4463cc4b5610955320cdc1b52")
.then(function(verDetalle){
  return verDetalle.json();
   })
   .then(function(datosDetalle){
  var details = document.querySelector(".details");
  var genres = datosDetalle.genres;
 console.log(datosDetalle);

      var detalles = '<div class="descri-contenedor">'
      detalles += '<p class="nomDetalle">' + datosDetalle.name + '</p>';
      detalles +=  '<p class="imagen">' + '<img class="imagen-detalles" src="' + "https://image.tmdb.org/t/p/original/" + datosDetalle.poster_path +'" >' + '</p>';
      detalles += '<div class="descri">';

      detalles += '<p>' + datosDetalle.overview + '</p>';
            var ulGenres = '<p class="losGeneros">'+ "Géneros relacionados:" + '</p>' + "<ul>"
            for(var i=0;i<genres.length;i++){
               ulGenres+= '<li class="id-detalles">' + genres[i].id +'</li>' +
               '<li class="listaGen">'+ '<a href="series.html?id=">' + genres[i].name + '</a>' +"</li>"
             }
              ulGenres += "</ul>"
          detalles += ulGenres;
          detalles +=  '<p>' + "Lenguaje original: " + datosDetalle.original_language + '</p>';
          detalles +=  '<p>' + datosDetalle.first_air_date + '</p>';
          detalles +=  '<br>';
          detalles +=  '<button  id="button-reco"type="button" name="recom">'+ "Ver recomendaciones" + '</button>';
          detalles +=  '</div>';
          detalles +=  '</div>';
 details.innerHTML+= detalles;

  })

  var queryString2 = location.search;
   // location es toda tu url y el search busca parametros a partir del signo de pregunta
  var queryStringObj2 = new URLSearchParams(queryString);
   var videoTrailer = queryStringObj2.get('id');


  fetch("https://api.themoviedb.org/3/tv/"+ videoTrailer + "/videos?api_key=4c34fda4463cc4b5610955320cdc1b52&language=en-US")
  .then(function(verVideo){
    return verVideo.json();
     })
     .then(function(datosVideo){
       console.log(datosVideo);
    var youtube = document.querySelector(".youtube");
    var trailer = datosVideo.results[0].key;
    console.log(trailer);
    console.log('https://www.youtube.com/watch?v='+ trailer);
   youtube.innerHTML =  '<iframe width="560" height="315" src="https://www.youtube.com/embed/'+ trailer+'"   frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen >' + '</iframe>';
})


// boton recomendaciones
setTimeout (function(){
var botonReco = document.querySelector("#button-reco");
botonReco.onclick= function(){
  // ver recomendaciones button
  fetch("https://api.themoviedb.org/3/tv/"+ idDetalle +"/recommendations?api_key=4c34fda4463cc4b5610955320cdc1b52&language=en-US&page=1")
     .then(function(verRecom){
       return verRecom.json();
        })
       .then(function(datosRecom){
         for (var i = 0; i <datosRecom.results.length; i++) {
           console.log(datosRecom.results[i].name);
           var recomendadas = document.querySelector(".recomendadas")
           recomendadas.innerHTML += '<img class="posterRecomend" src="' + "https://image.tmdb.org/t/p/original/" + datosRecom.results[i].poster_path + '">'

         }

        })

}
}
, 3000);






























































}
