function initConsEndVoc(cadena){
    let loweString = cadena.toLowerCase();
    let result = "";
    let cons = "";
    let voc = "";

    for(let j = 0; j < cadena.length; j++){
        let char = loweString.charCodeAt(j);
        
        if(char == 97||char == 101||char == 105||char == 111||char == 117){
            voc = voc + loweString.charAt(j);
        }
        else{            
            if(char != 32){                
                cons = cons + loweString.charAt(j);
            }
        }          
    }
    result = cons + voc;
    document.write(result+"<br>");
}

cadena = prompt("Introduce una oración: ");
initConsEndVoc(cadena);
cadena = prompt("Introduce una oración: ");
initConsEndVoc(cadena);
