const start = new Date();
const year = start.getFullYear();
const month = start.getMonth()+1;
const day = start.getDate();
const hour = start.getHours();
const min = start.getMinutes();
const seg = start.getSeconds();




document.write("El año actual es: "+year+"<br/>");
document.write("El mes actual es: "+month+"<br/>");
document.write("El día actual es: "+day+"<br/>");
document.write("La hora actual es: "+hour+"<br/>");
document.write("Los minutos actuales son: "+min+"<br/>");
document.write("Los segundos actuales son: "+seg+"<br/>");