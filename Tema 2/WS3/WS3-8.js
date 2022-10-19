function countWords(cadena){
    let list = cadena.split(" ");
    counter = 0;
    for (word of list){
        if (word != "" && word != " "){
            counter += 1;
        }
    }
    document.write(counter);
}

cadena = prompt("Introduce una oración: ");
countWords(cadena);