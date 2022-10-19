function SubstringInString(cadena1,cadena2){
    if(cadena1.includes(cadena2)){
        document.write(cadena1.indexOf(cadena2));        
    }else 
        document.write("No es una subcadena")
}

cadena = prompt("Introduce una oración: ");
subcadena = prompt("Introduce una oración: ");
SubstringInString(cadena, subcadena);