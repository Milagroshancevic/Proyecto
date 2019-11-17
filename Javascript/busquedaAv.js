window.onload = function(){

  var query = location.search;
  var queryObj = new URLSearchParams(query);

  var ordenSerie = queryObj.get('sort_by');
  var estrenoSerie = queryObj.get('first_air_date_year');
  var incluidoSerie = queryObj.get('with_genres');
  var excluidoSerie = queryObj.get('without_genres');

  if(ordenSerie == null){
    ordenSerie == ""
  }else{
    ordenSerie = '&sort_by=' + ordenSerie
  }
  if(estrenoSerie == null){
    estrenoSerie == ""
  }else{
    estrenoSerie = '&first_air_date_year=' + estrenoSerie
  }
  if(incluidoSerie == null){
    incluidoSerie == ""
  }else{
    incluidoSerie = '&with_genres=' + incluidoSerie
  }
  if(excluidoSerie == null){
    excluidoSerie == ""
  }else{
    excluidoSerie = '&without_genres=' + excluidoSerie
  }

  var ep = "https://api.themoviedb.org/3/discover/tv?api_key=4c34fda4463cc4b5610955320cdc1b52" + ordenSerie + estrenoSerie + incluidoSerie + excluidoSerie
  console.log(ep);
  fetch(ep)

  .then(function(respAvanzado){
    return respAvanzado.json();
  })
  .then(function(dataAvanzado){
    var datosAvan = dataAvanzado.results
    console.log(datosAvan);
    // var generoIncluido = document.querySelector(".generoIncluido")
    // var generoExcluido = document.querySelector(".generoExcluido")
    // var orden = document.querySelector(".orden")
    // var fecha = document.querySelector(".fecha")


  })
}
