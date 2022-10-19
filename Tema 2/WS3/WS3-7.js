function invierteCadena(cadena){
    let cadenaInv = "";
    for (let i = 0; i<cadena.length; i++){
        cadenaInv = cadena[i] + cadenaInv;
    }
    return cadenaInv;
}

function palindrome(cadena){
    cadena = cadena.toLowerCase();
    cadena = cadena.replaceAll(" ","");
    cadenaAlReves = invierteCadena(cadena);
    document.write(cadena + "<br/>" + cadenaAlReves + "<br/>");
    if(cadena == cadenaAlReves){
        document.write("Es un palíndromo <br/>");
    }
    else{
        document.write("No es un palíndromo <br/>");
    }
}

cadena = prompt("Introduce una oración: ");
palindrome(cadena);