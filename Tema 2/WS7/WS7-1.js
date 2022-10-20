if(navigator.geolocation){  
    navigator.geolocation.watchPosition(muestraPosicion);
}else {
  console.log("La localización no está disponible");
}

let x1,x2,y1,y2;

function position(posicion){
  console.log("Latitud: ", posicion.coords.latitude +
  "Longitud: " + posicion.coords.longitude);
}

function distanciaDosPuntos(x1,y1,x2,y2){
  let distancia =Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
  console.log("Distancia recorrida: ",distancia);
}

