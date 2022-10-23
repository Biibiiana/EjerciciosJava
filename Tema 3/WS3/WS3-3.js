let matriz = [
    [34,21,32,41,25],
    [14,42,43,14,31],
    [54,45,52,42,23],
    [33,15,51,31,35],
    [21,52,33,13,23]];

function search(matriz){
    now = 11;
    x = parseInt(now / 10) - 1;
    y = parseInt(now % 10) - 1;

    while(matriz[x][y] != now){
        next = matriz[x][y];
        now = next;
        document.write(next, "<br>")
        x = parseInt(now / 10) - 1;
        y = parseInt(now % 10) - 1;
    }
}

search(array);