function reloj(intervalo){
    hora = new Date();
    document.write(hora.getSeconds()+"<br>");
    if(hora.getSeconds()<5)
        //setTimeout(reloj, 1000)
        clearInterval(intervalo);
}

var intervalo = setTimeout(reloj, 1000);
document.write(reloj(intervalo));


/*function muestraReloj() {
    var DateClock = new Date();
    var hours = fechaHora.getHours();
    var min = fechaHora.getMinutes();
    var seg = fechaHora.getSeconds();
  
    if(horas < 10) { hours = '0' + hours; }
    if(minutos < 10) { min = '0' + min; }
    if(segundos < 10) { seg = '0' + seg; }

    clock = horas+':'+minutos+':'+segundos;
  
    document.write(clock);
}
  
window.onload = function() {
    setInterval(muestraReloj, 1000);
}*/