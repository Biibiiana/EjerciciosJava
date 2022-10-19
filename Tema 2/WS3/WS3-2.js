function upperOrLow(cad_arg){
    upperString = cad_arg.toUpperCase();
    lowerString = cad_arg.toLowerCase();
    if (cad_arg == upperString){
        document.write("La oración está toda en mayúscula.<br>");
    }
    else if (cad_arg == lowerString){
        document.write("La oración está toda en minúscula.<br>");
    }
    else {
        document.write("La oración contiene mayúsculas y minúsculas.<br>");
    }
}

cadena = prompt("Introduce una oración: ");
upperOrLow(cadena);