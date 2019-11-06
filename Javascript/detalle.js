window.onload = function (){


// detalles aire
  fetch("https://api.themoviedb.org/3/tv/airing_today?api_key=4c34fda4463cc4b5610955320cdc1b52&language=en-US")
  .then(function(respuestaA){
    return respuestaA.json();
  })
  .then(function(datosA){
    var aire = datosA.results;
    var detalleA = document.querySelector(".detalleA");

    for(i=0;i<aire.length;i++){
      detalleA.innerHTML+= '<p>' + aire[i].name + '</p>' + '<p>'+ "Genero: " +  aire[i].genre_ids + '</p>' + '<p>' + "Lenguaje: " + aire[i].original_language + '</p>' + '<p>' + aire[i].overview + '</p>'+ '<p>' + aire[i].first_air_date + '</p>'  + '<img src="' + "https://image.tmdb.org/t/p/original/" + aire[i].poster_path +'" >' + '<br>'+ '<button class="button-reco"type="button" name="recom">'+ "Ver recomendaciones" + '</button>'
      }

})

// detalles mejores puntuados
fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=4c34fda4463cc4b5610955320cdc1b52&page=1")
.then(function(respuestaMPDetail){
  return respuestaMPDetail.json();
})
.then(function(datosMPdet){
  var mejorespunt = datosMPdet.results;
  var detalleMP = document.querySelector(".detalleMP");

  for(i=0;i<mejorespunt.length;i++){
    detalleMP.innerHTML+= '<p>' + mejorespunt[i].name + '</p>' + '<p>'+ "Genero: " +  mejorespunt[i].genre_ids + '</p>' + '<p>' + "Lenguaje: " + mejorespunt[i].original_language + '</p>' + '<p>' + mejorespunt[i].overview + '</p>'+ '<p>' + mejorespunt[i].first_air_date + '</p>'  + '<img src="' + "https://image.tmdb.org/t/p/original/" + mejorespunt[i].poster_path +'" >' + '<br>'+ '<button class="button-reco"type="button" name="recom">'+ "Ver recomendaciones" + '</button>'
    }
})

// detalles populares
fetch("https://api.themoviedb.org/3/tv/popular?api_key=4c34fda4463cc4b5610955320cdc1b52&page=1")
.then(function(respuestaPdet){
  return respuestaPdet.json();
})
.then(function(datosPdet){
  var popularesdet = datosPdet.results;
  var detalleP = document.querySelector(".detalleP");

  for(i=0;i<popularesdet.length;i++){
    detalleP.innerHTML+= '<p>' + popularesdet[i].name + '</p>' + '<p>'+ "Genero: " +  popularesdet[i].genre_ids + '</p>' + '<p>' + "Lenguaje: " + popularesdet[i].original_language + '</p>' + '<p>' + popularesdet[i].overview + '</p>'+ '<p>' + popularesdet[i].first_air_date + '</p>'  + '<img src="' + "https://image.tmdb.org/t/p/original/" + popularesdet[i].poster_path +'" >' + '<br>'+ '<button class="button-reco" type="button" name="recom">'+ "Ver recomendaciones" + '</button>'
    }
})


// boton recomendaciones

var recoSeries = document.querySelector(".button-reco")
console.log(recoSeries);
  recoSeries.onclick = function() {


}






























































}
