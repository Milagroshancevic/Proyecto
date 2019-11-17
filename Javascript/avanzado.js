window.onload = function () {

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
generoIncluido.innerHTML += '<option value="vacio">'+"Seleccione su opción" + '</option>'
generoExcluido.innerHTML += '<option value="vacio">'+"Seleccione su opción " + '</option>'
for(var i=0; i<generosSelect.length; i++){
      generoIncluido.innerHTML += '<option value="'+generosSelect[i].id+'">' + generosSelect[i].name + '</option> '
// Excluir genero
      generoExcluido.innerHTML += '<option value="'+generosSelect[i].id+'">' + generosSelect[i].name + '</option> '
    }

  })

// Ordenar segun preferencias
var preferencias = "";
preferencias += '<option value="vacio">' + "Seleccione un flitro"  + '</option>'
preferencias += '<option value="vote_average.desc">' + " Mejores puntuadas"  + '</option>'
preferencias += '<option value="vote_avrage.asc">' + "Peores puntuadas " + '</option>'
preferencias += '<option value="first_air_date.desc">' + "Más recientes " + '</option>'
preferencias += '<option value="first_air_date.asc">' + "Más antiguas" + '</option>'
preferencias += '<option value="popularity.desc">' + " Más populares" + '</option>'
preferencias += '<option value="popularity.asc">' + " Menos populares" + '</option>'
  document.querySelector(".orden").innerHTML += preferencias





// Buscar por fecha

var fecha= document.querySelector(".fecha")
fecha.innerHTML+='<option value="vacio">'+"Seleccione su opción " + '</option>'
for (var i = 2021; i > 1950; i--) {
  fecha.innerHTML += '<option value=" '+i+'">'+i+'</option>'

}

// validamos campos
var formulario = document.querySelector(".buscadorAvanzado");
var incluido = document.querySelector(".generoIncluido");
var opcionesInc = incluido.options;
var selectInc = incluido.selectedIndex;
var excluido = document.querySelector(".generoExcluido");
var opcionesExc = excluido.options;
var selectExc = excluido.selectedIndex;
var order = document.querySelector(".orden");
var opcionesOrd = order.options;
var selectOrd = order.selectedIndex;
var anioDeEstreno = document.querySelector(".fecha");
var opcionesFecha = anioDeEstreno.options;
var selectFecha = anioDeEstreno.selectedIndex;

console.log(anioDeEstreno[0]);
console.log(opcionesFecha);

// formulario.onsubmit = function(e) {
  // console.log(document.querySelector(".fecha").selectedIndex);
  // e.preventDefault()
//   if (document.querySelector(".generoIncluido").selectedIndex == 0) {
//     document.querySelector("#alertIncluido").innerText = "*Seleccioná el género que quieras buscar";
//   }
//   if (document.querySelector(".generoExcluido").selectedIndex == 0) {
//       document.querySelector("#alertExcluido").innerText = "*Seleccioná el género que quieras excluir";
//     }
//   if (document.querySelector(".orden").selectedIndex == 0) {
//         document.querySelector("#alertOrden").innerText = "*Seleccioná el orden de tu búsqueda";
//     }
//   if (document.querySelector(".fecha").selectedIndex == 0) {
//           document.querySelector("#alertFecha").innerText = "*Seleccioná un año";
//   }
// }

// Luego de enviar formu --> busquedaAv









}
