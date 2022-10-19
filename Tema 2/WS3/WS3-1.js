function invierteCadena(cadena){
    let cadenaSeparada = cadena.split(" ");
    let cadenaInv = "";
    for (let i = 0; i<cadenaSeparada.length; i++){
        cadenaInv = cadenaSeparada[i] + " " + cadenaInv;
    }
    return cadenaInv;
}

cadena = prompt("Introduce una cadena: ");
cadenaInvertida = invierteCadena(cadena);
document.write("La cadena invertida es: <strong>"+cadenaInvertida+"</strong><br>");

function inviertePalabras(cadena){
    let separarCadena = cadena.split("");
    let invertirLetras = separarCadena.reverse();
    let unirCadena = invertirLetras.join("");
    return unirCadena;
}

palabraInvertida = inviertePalabras(cadena);
document.write("La palabra invertida es: <strong>"+palabraInvertida+"</strong><br>");

function encuentraPalabraMasLarga(cadena){
    let separarCadena = cadena.split(" ");
    let palabraMasLarga = "";
    for (let i=0; i<separarCadena.length; i++){
        if (separarCadena[i].length>palabraMasLarga.length){
            palabraMasLarga = separarCadena[i];
        }
    }
    longitud = palabraMasLarga.length;
    document.write("La palabra más larga es <strong>"+palabraMasLarga+"</strong> y tiene una longitud de <strong>"+longitud+"</strong><br>");
}

encuentraPalabraMasLarga(cadena);


function filtraPalabrasMasLargas(cadena, i){
    let separarCadena = cadena.split(" ");
    let palabrasMasLargas = [];
    for (let j=0; j<separarCadena.length; j++){
        if (i<separarCadena[j].length){
            palabrasMasLargas.push(separarCadena[j]);
        }
    }
    document.write("Las palabras con una longitud superior a <strong>"+i+"</strong> son <strong>"+palabrasMasLargas+"</strong><br>");
}

long = parseInt(prompt("Introduce la longitud mínima que se quiere: "));
filtraPalabrasMasLargas(cadena, long);


function cadenaBienFormada(cadena){
    cadenaLower = cadena.toLowerCase();
    capitalizeString = cadenaLower.substring(0, 1).toUpperCase() + cadenaLower.substring(1);
    return capitalizeString;
}

cadena = prompt("Introduce una oración: ");
resultado = cadenaBienFormada(cadena);
document.write("Las cadena antes <strong>"+cadena+"</strong><br> La cadena ahora: <strong>"+resultado+"</strong><br>");