window.onload = function () {

  fetch ("https://api.themoviedb.org/3/genre/tv/list?api_key=4c34fda4463cc4b5610955320cdc1b52")
  .then(function(selectGen){
    return selectGen.json();
  })
  .then(function(datosSelectGen){
    var generosSelect= datosSelectGen.genres;
    console.log(generosSelect);
    var generoIncluido = document.querySelector(".generoIncluido");
    var generoExcluido =document.querySelector(".generoExcluido");
    // console.log(generosSelect);

    generoIncluido.innerHTML += '<option value="">'+"Seleccione su opción" + '</option>'
    generoExcluido.innerHTML += '<option value="">'+"Seleccione su opción " + '</option>'

for(var i=0; i<generosSelect.length; i++){
  // Incluir genero
      generoIncluido.innerHTML += '<option value="'+generosSelect[i].id+'">' + generosSelect[i].name + '</option> '
// Excluir genero
      generoExcluido.innerHTML += '<option value="'+generosSelect[i].id+'">' + generosSelect[i].name + '</option> '
    }

  })

// Ordenar segun preferencias

var preferencias = '<option value="vacio">' + "Seleccione un flitro"  + '</option>'
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


var query = location.search;
var queryObj = new URLSearchParams(query);

var ordenSerie = queryObj.get('orden');
var estrenoSerie = queryObj.get('fecha');
var incluidoSerie = queryObj.get('generoIncluido');
var excluidoSerie = queryObj.get('generoExcluido');

// console.log(ordenSerie,estrenoSerie,incluidoSerie,excluidoSerie);

// belu y mili
var enviarDatos = true;
var formulario = document.querySelector(".buscadorAvanzado");
var botoncito = document.querySelector("#buscar-avan-button");
botoncito.addEventListener('click', function(evento) {
  console.log(document.querySelector(".generoIncluido").selectedIndex);
var incluimos = document.querySelector(".generoIncluido").selectedIndex;
console.log(incluimos);
var excluimos = document.querySelector(".generoExcluido").selectedIndex;
var ordenamos = document.querySelector(".orden").selectedIndex;
var definirFecha = document.querySelector(".fecha").selectedIndex;
  // valido que por lo menos 1 campo tenga data.
  if(incluimos == 0 && excluimos == 0 && ordenamos == 0 && definirFecha ==0 ){
    evento.preventDefault();
    if (incluimos == 0) {
      document.querySelector("#alertIncluido").innerText = "*Seleccioná el género que quieras buscar";
      document.querySelector("#alertIncluido").style.color = "red";
      document.querySelector("#alertIncluido").style.marginBottom = "10px"
    }
    if (excluimos == 0) {
      document.querySelector("#alertExcluido").innerText = "*Seleccioná el género que quieras excluir";
      document.querySelector("#alertExcluido").style.color = "red";
      document.querySelector("#alertExcluido").style.marginBottom = "10px"
    }
    if (ordenamos == 0) {
     document.querySelector("#alertOrden").innerText = "*Seleccioná el orden de tu búsqueda";
     document.querySelector("#alertOrden").style.color = "red";
     document.querySelector("#alertOrden").style.marginBottom = "10px"
    }
   if (definirFecha == 0) {
          document.querySelector("#alertFecha").innerText = "*Seleccioná un año";
          document.querySelector("#alertFecha").style.color = "red";
          document.querySelector("#alertFecha").style.marginBottom = "10px"
      }
    }
    })


    // insertamos todo en el html

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

// insertamos la data en el html con el scroll infinito

var listElm = document.querySelector('#infinite-list');

 // Add 20 items.
 var nextItem = 1;
 var loadMore = function() {
   // este for debe hacer el fetch por pagina --> solo pusimos 20 porque sino tardan años luz en cargar los posters, (cuando poniamos los nombres solamente nos cargaba mucho mas rapido con 80 pages)
   for(var k=1; k<= 20 ; k++){

     var ep = "https://api.themoviedb.org/3/discover/tv?api_key=4c34fda4463cc4b5610955320cdc1b52&page="+ k + ordenSerie + estrenoSerie + incluidoSerie + excluidoSerie
     // console.log(ep);

     fetch(ep)

     .then(function(respAvanzado){
       return respAvanzado.json();
     })
     .then(function(dataAvanzado){
       var datosAvan = dataAvanzado.results;
       console.log(datosAvan);

       var generoBuscadorAvanzado = document.querySelector(".genero-buscador-avanzado");
       var ordenBuscadorAvanzado = document.querySelector(".orden-buscador-avanzado");
       var fechaBuscadorAvanzado = document.querySelector(".fecha-buscador-avanzado");

       for (var i = 0; i < datosAvan.length; i++) {
         if (datosAvan[i].poster_path !== null){
           generoBuscadorAvanzado.innerHTML +=
           // '<li>'+ datosAvan[i].name + '</li>'

           '<li><a class="avanzadoAlDetalle" href="detalle.html?id=' + datosAvan[i].id+ '">'+ '<img src="' + "https://image.tmdb.org/t/p/original/" + datosAvan[i].poster_path + '">' + '</a></li>'

         }

       }

     })
   }
 }

 // Detect when scrolled to bottom.
 listElm.addEventListener('scroll', function() {
   if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
     loadMore();
   }
 });

 // Initially load some items.
 loadMore();












// cierro el onload
}
