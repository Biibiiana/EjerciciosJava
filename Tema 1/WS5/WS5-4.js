number = parseInt(prompt("Introduzca un número: "));


if (number > 100) {
    number2 = number*0.15;
    console.log("Con el 15% es: "+number2);
}
else {
    console.log("No hay descuento.");
}