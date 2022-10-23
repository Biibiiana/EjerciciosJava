function getRandomInt(num) {
    return Math.floor(Math.random() * num);}
var map2=[
[[],[],[],[],[]],
[[],[],[],[],[]],
[[],[],[],[],[]],
[[],[],[],[],[]],
[[],[],[],[],[]]];

function crear(map2){
    let x = getRandomInt(5), y = getRandomInt(5);
    map2[x][y].push(x+1,y+1);
    sigue = true;
    while(sigue){
    aux = [x,y];
    x = getRandomInt(5);
    y = getRandomInt(5);

    if(map2[x][y]=='')
    map2[x][y] = [aux[0]+1,aux[1]+1];
    if(x==0 && y==0)
    sigue=false;
    }
    for (i=0;i<map2.length;i++){
        for(j=0;j<map2[i].length;j++){
            if (map2[i][j] == '')
            map2[i][j] = [getRandomInt(5)+1,getRandomInt(5)+1];
        }
    }
return map2
}

console.log(crear(map2))