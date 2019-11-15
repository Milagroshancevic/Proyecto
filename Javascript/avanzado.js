window.onload= function () {

  fetch ("https://api.themoviedb.org/3/genre/tv/list?api_key=4c34fda4463cc4b5610955320cdc1b52")
  .then(function(selectGen){
    return selectGen.json();
  })
  .then(function(datosSelectGen){
    var generosSelect= datosSelectGen.genres;
    var generoIncluido = document.querySelector(".generoIncluido");
    var generoExcluido =document.querySelector(".generoExcluido");
    console.log(generosSelect);

// Incluir genero
generoIncluido.innerHTML += '<option value="">'+"Seleccione su opción" + '</option>'
generoExcluido.innerHTML += '<option value="">'+"Seleccione su opción " + '</option>'
for(var i=0; i<generosSelect.length; i++){
      generoIncluido.innerHTML += '<option value="'+generosSelect[i].id+'">' + generosSelect[i].name + '</option> '
// Excluir genero
      generoExcluido.innerHTML += '<option value="'+generosSelect[i].id+'">' + generosSelect[i].name + '</option> '
    }

  })

// Ordenar segun preferencias
var preferencias = "";
preferencias += '<option value="">' + "Seleccione un flitro"  + '</option>'
preferencias += '<option value="vote_average.desc">' + " Mejores puntuadas"  + '</option>'
preferencias += '<option value="vote_avrage.asc">' + "Peores puntuadas " + '</option>'
preferencias += '<option value="first_air_date.desc">' + "Más recientes " + '</option>'
preferencias += '<option value="first_air_date.asc">' + "Más antiguas" + '</option>'
preferencias += '<option value="popularity.desc">' + " Más populares" + '</option>'
preferencias += '<option value="popularity.asc">' + " Menos populares" + '</option>'
  document.querySelector(".orden").innerHTML += preferencias





// Buscar por fecha

var fecha= document.querySelector(".fecha")
fecha.innerHTML+='<option value="">'+"Seleccione su opción " + '</option>'
for (var i = 2021; i > 1950; i--) {
  fecha.innerHTML += '<option value=" '+i+'">'+i+'</option>'

}




// LUEGO DE ENVIARFORMU

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
var queryStringExcluido = new URLSearchParams(queryStringExcluido);
var excluidoSerie = queryStringExcluido.get('without_genres');
fetch("https://api.themoviedb.org/3/discover/tv?api_key=4c34fda4463cc4b5610955320cdc1b52&sort_by=" + ordenSerie + "&first_air_date_year="+ estrenoSerie + "&with_genres=" +incluidoSerie + "&without_genres=" + excluidoSerie)

.then(function(respuestaAvanzado){
  return respuestaAvanzado.json();
})
.then(function(datosAvanzado){
//   var datosAvan = datosAvanzado.results
//   console.log(datosAvan);
//   var generoIncluido = document.querySelector(".generoIncluido")
//   var generoExcluido = document.querySelector(".generoExcluido")
//   var orden = document.querySelector(".orden")
//   var fecha = document.querySelector(".fecha")
//
//
//
//      for(var i=0; i< datosAvan.length; i++){
//
//     generoIncluido.innerHTML += '<option value="h">' + "hola" + "</option>"
//
// }
})























































}
