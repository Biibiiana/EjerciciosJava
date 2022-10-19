function locateSubstring(cadena, subcadena){
    let i;
    list = [];
    let sentences = cadena;
    let count = 0;
    while (i!=-1){
        i = sentences.indexOf(subcadena);
        if (i!=-1){
            list.push(i);
            i += subcadena.length;
        }
        sentences = sentences.replace(subcadena, '');
        count += 1;
    }
    return list;
}

cadena = prompt("Introduce una oración: ");
subcadena = prompt("Introduce la palabra que quieres buscar: ");
document.write(locateSubstring(cadena, subcadena));