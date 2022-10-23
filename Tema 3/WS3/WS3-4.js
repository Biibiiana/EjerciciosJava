// Sin terminar, no consigo solucionarlo.

function getRandomInt(num) {
    return Math.floor(Math.random() * num);
}

let matriz=[
    [00,00,00,00,00],
    [00,00,00,00,00],
    [00,00,00,00,00],
    [00,00,00,00,00],
    [00,00,00,00,00]];

function crear(matriz){
    let x = getRandomInt(5);
    let y = getRandomInt(5);
    next = true;
    while(next){
        x = x + 1;
        y = y + 1;
        document.write("x es: " + x + ". y es:" + y);
        aux = [x + y];
        document.write("aux es: " + aux);
        document.write("la matriz es" + matriz[x][y]);
        if(matriz[x][y]==00){
            matriz[x][y] = aux;
        }
        if(x!=0 && y!=0){
            next=false;
        }
        for (i=0;i<matriz.length;i++){
            for(j=0;j<matriz[i].length;j++){
                if (matriz[i][j] == 00)
                matriz[i][j] = getRandomInt(5)+1, getRandomInt(5)+1;
            }
        }
        x = getRandomInt(5);
        y = getRandomInt(5);
    }
    return matriz
}

console.log(crear(matriz));