const today = new Date();
document.write("Hoy es: "+today+"<br/>");

const fecha85 = new Date();
fecha85.setDate(today.getDate()+85);
document.write("Dentro de 85 días será el: "+fecha85+"<br/>");

const fecha187 = new Date();
fecha187.setDate(today.getDate()-187);
document.write("Hace 187 días era el: "+fecha187+"<br/>");

fecha85.setFullYear(fecha85.getFullYear()+2);
document.write("Dentro de 2 años y 85 días será el: "+fecha85+"<br/>");

fecha187.setHours(fecha187.getHours()-24);
document.write("Hace 187 días y 24 horas era el: "+fecha187+"<br/>");