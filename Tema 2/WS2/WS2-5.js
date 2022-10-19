let a = parseInt(prompt("Introduce el a: ")); 
let b = parseInt(prompt("Introduce el b: ")); 
let c = parseInt(prompt("Introduce el c: ")); 

let x1 = parseInt(-b + Math.sqrt((b*b)-(4*a*c)))/(2*a);
let x2 = parseInt(-b - Math.sqrt((b*b)-(4*a*c)))/(2*a);

document.write("La primera solucion es: "+x1+"<br/>");
document.write("La segunda solucion es: "+x2);

// Usar de ejemplo: 1, -4, 4.