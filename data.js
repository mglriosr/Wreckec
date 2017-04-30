var log-ini;
var lat-ini;

var lon-fin;
var lat-fin;

var punto-1;
var punto-2;
var punto-3;

function iniciar(){

var boton=document.getElementById('obtener');

boton.addEventListener('click', obtener, false);

}



function obtener(){navigator.geolocation.getCurrentPosition(mostrar, gestionarErrores);}



function mostrar(posicion){

var ubicacion=document.getElementById('localizacion');

var datos='';

datos+='Latitud: '+posicion.coords.latitude+'<br>';

datos+='Longitud: '+posicion.coords.longitude+'<br>';

datos+='Exactitud: '+posicion.coords.accuracy+' metros.<br>';


ubicacion.innerHTML=datos;

}



function gestionarErrores(error){

alert('Error: '+error.code+' '+error.message+ '\n\nPor favor compruebe que está conectado '+

'a internet y habilite la opción permitir compartir ubicación física');

}



window.addEventListener('load', iniciar, false);
