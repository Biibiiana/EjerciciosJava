const numero1 = parseInt((Math.random()*100+1));
//height = prompt("Introduce la altura de las celdas: ");
document.write("El número aleatorio entre 0-100: "+numero1+"<br/>");

const numero2 = parseInt((Math.random()*(200-100+1)+100));
document.write("El número aleatorio entre 100-200: "+numero2+"<br/>");


init = prompt("¿Entre qué dos números quiere que se genere el aleatorio? Introduce el primero: ");
end = prompt("Introduce el segundo: ");
const numero3 = parseInt((Math.random()*(end-init+1)+init));

document.write("El número aleatorio entre "+init+"-"+end+": "+numero3+"<br/>");