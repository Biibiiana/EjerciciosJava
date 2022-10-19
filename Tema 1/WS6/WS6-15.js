num = parseInt(prompt("Introduce un número: "));
num2 = parseInt(prompt("Introduce un número: "));

while (num2!=num)
{
    if (num2 > num) {
        num2 = parseInt(prompt("El número es menor. Introduce un nuevo número: "));
    }
    else {
        num2 = parseInt(prompt("El número es mayor. Introduce un nuevo número: "));
    }
}
document.write("¡Enhorabuena!! Ha acertado.");