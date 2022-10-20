age = parseInt(prompt("Introduzca su edad: "));
city = prompt("Introduzca su lugar de nacimiento: ");


if ((age >= 18 &&  age <= 30) && city === "Madrid") {
    console.log("¡¡Enhorabuena!! Puedes	acceder	al	carnet	de	empresarios	emprendedores.");
}
else {
    console.log("Lo sentimos no puedes acceder al carnet de empresarios emprendedores.");
}