window.onload= function () {

  var queryStringOrden = location.search;
   // location es toda tu url y el search busca parametros a paratir del signo de pregunta
  var queryStringOrden = new URLSearchParams(queryStringOrden);
   var ordenSerie = queryStringOrden.get('sort_by');

   var queryStringEstreno = location.search;
    // location es toda tu url y el search busca parametros a paratir del signo de pregunta
   var queryStringEstreno = new URLSearchParams(queryStringEstreno);
    var estrenoSerie = queryStringEstreno.get('first_air_date_year');

    var queryStringIncluido = location.search;
     // location es toda tu url y el search busca parametros a paratir del signo de pregunta
    var queryStringIncluido = new URLSearchParams(queryStringIncluido);
     var incluidoSerie = queryStringIncluido.get('with_genres');

     var queryStringExcluido = location.search;
      // location es toda tu url y el search busca parametros a paratir del signo de pregunta
     var queryStringExcluidoExcluido = new URLSearchParams(queryStringExcluido);
      var excluidoSerie = queryStringExcluido.get('without_genres');


fetch("https://api.themoviedb.org/3/discover/tv?api_key=4c34fda4463cc4b5610955320cdc1b52&sort_by=" + ordenSerie + "&first_air_date_year="+ estrenoSerie + "&with_genres=" +incluidoSerie + "&without_genres=" + excluidoSerie);
.then(function(respuestaAvanzado){
  respuestaAvanzado.json();
})
.then(function(datosAvanzado){
  var buscadorAvanzado = document.querySelector()

})
























































}
