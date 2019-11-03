window.onload = function (){

  fetch("https://api.themoviedb.org/3/tv/airing_today?api_key=4c34fda4463cc4b5610955320cdc1b52&language=en-US")
  .then(function(respuestaA){
    return respuestaA.json();
  })
  .then(function(datosA){
    var aire= datosA.results;
    var detalleA= document.querySelector(".detalleA");


    for(var i=0; i<aire.lenght;i++) {
      detalleA.innerHTML += '<li>' + aire[i].name + '</li>' + '<li>'+ aire[i].genre_ids+ '</li>' + '<li>'+ aire[i].original_language + '</li>' + '<li>'+ aire[i].overview + '</li>' + '<li>'+ aire[i].first_air_date + '</li>' + '<li>'+'<img src="' + "https://image.tmdb.org/t/p/original/" + aire[i].poster_path + '">'+'</li>'
      //+ '<li>'+ '<input class="reco" type="button" value="recomendaciones" name="r">' + '<label for="r">' Ver recomendaciones + '</label>' + '</input>' + '</li>'

    }

  })




































































}
