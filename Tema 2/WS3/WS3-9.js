//Incompleto, no lo consigo, me rindo.

function invierteCadena(cadena){
    let cadenaInv = "";
    for (let i = 0; i<cadena.length; i++){
        cadenaInv = cadena[i] + cadenaInv;
    }
    return cadenaInv;
}

function squareWord(cadena){
    cadenaAlReves = invierteCadena(cadena);
    document.write("<table>");
    document.write("    <tr>");
    for(let i = 0; i < cadena.length; i++){
        document.write("        <td>"+ cadena.charAt(i) + "</td>");
    }
    document.write("    </tr>");
    document.write("    <tr>");
    for(let i = 0; i < cadena.length; i++){
        if(i = 1){
            document.write("        <td>"+ cadena.charAt(i) + "</td>");
        }
        else if(i = 3){
            document.write("        <td>"+ cadena.charAt(i) + "</td>");
        }
        else{
            document.write("        <td> </td>");
        }
    }
    for(let i = 0; i < cadenaAlReves.length; i++){
        if(i = 1){
            document.write("        <td>"+ cadenaAlReves.charAt(i) + "</td>");
        }
        else if(i = 3){
            document.write("        <td>"+ cadenaAlReves.charAt(i) + "</td>");
        }
        else{
            document.write("        <td> </td>");
        }
    }
    document.write("    </tr>");
    document.write("    <tr>");
    for(let i = 0; i < cadenaAlReves.length; i++){
        document.write("        <td>"+ cadenaAlReves.charAt(i) + "</td>");
    }
    document.write("    </tr>");
    document.write("</table>");
}

squareWord('hola');