function encrypt(message){
    let sinEspacios = message.split(' ').join('');
    let long = sinEspacios.length;
    let numAux = Math.ceil(Math.sqrt(long));
    let sigue = true;
    let array = [];
    let i = 0;
    let j = numAux;

    while (sigue){
        // Se divide en tantas partes como su raíz cuadrada indique.
        // arr.slice([inicio [, fin]]) devuelve una copia de una parte del array dentro de un nuevo array
        if (sinEspacios.slice(i, j).length < numAux){
            sigue = false;
        }
        // Añadimos a array y sumamos para seguir.
        array.push(sinEspacios.slice(i, j));
        i += numAux;
        j += numAux;
    }
    // se elimina el último carácter si está vacío
    if(array[array.length-1]=='')array.pop();

    /*vamos sumando la primera letra de cada elemento del array
    tantas veces como letras tenga el ultimo elemento (que siempre va a tener o igual 
    o menos letras que los anteriores)*/
    // El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
    let solution = [];
    for (i = 0; i < array[array.length - 1].length; i++) {
        key = array.reduce((j, k) => j + k.charAt(i), "");
        solution.push(key);
    }
    //Comprobamos
    if (array[0].length != array[array.length - 1].length) {
        for (i = array[array.length - 1].length; i < array[array.length - 2].length; i++){
            key = array.reduce((j, k) => j + k.charAt(i), "");
            solution.push(key);
        }
    }
    return solution;
}

encryptMessage = encrypt("Los arrays me cuestan mucho ayuda");
document.write(encryptMessage);

// 7 
function decrypt(code){
    array = [];
    // Descodificar
    for(i = 0; i<code[code.length-1].length; i++){
        clave = code.reduce((j, k)=>j + k.charAt(i),'');
        array.push(clave);
    }
    // Comprobar
    if(code[0].length != code[code.length-1].length){
        for(i=code[code.length-1].length; i<code[code.length-2].length; i++){ 
            clave = code.reduce((j, k)=>j + k.charAt(i),'');
            array.push(clave);}
    }
    return(array.join(''));
}

//No consigo que salga entero ¿?
decryptMessage = decrypt(encryptMessage);
document.write(decryptMessage);