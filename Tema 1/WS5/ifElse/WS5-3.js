let age = parseInt(prompt("Introduce tu edad: "));

if (age > 0 && age <= 5){
    alert("Debe estar en jardín de infancia. ");
}
else if(age >= 6 && age <= 11){
    alert("Debe estar en primaria. ");
}
else if(age >= 12 && age <= 16){
    alert("Debe estar en la ESO. ");
}
else if(age >= 17 && age <= 21){
    alert("Debe estar en bachiller o en un ciclo. ");
}
else if(age >21){
    alert("Debe estar en universidad. ");
}
