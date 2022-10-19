function outRepetitions(cadena){
    _new = Array.from(new Set(cadena)).toString();
    document.write(_new);
}

cadena = prompt("Introduce una oración: ");
outRepetitions(cadena);