let _1stExam = parseFloat(prompt("Introduzca la nota del primer examen: "));
let _2ndExam = parseFloat(prompt("Introduzca la nota del segundo examen: "));

let _1stWork = parseFloat(prompt("Introduzca la nota del primer trabajo: "));
let _2ndWork = parseFloat(prompt("Introduzca la nota del segundo trabajo: "));

let eAverage = (_1stExam + _2ndExam) / 2;
let wAverage = (_1stWork + _2ndWork) / 2;

if (_1stExam > 4.5 && _2ndExam > 4.5 && _1stWork > 4.5 && _2ndWork > 4.5){
    let ePercentage = eAverage * (3/4);
    let wPercentage = wAverage * (1/4);
    let finalMark = ePercentage + wPercentage;
    if (finalMark >= 5){
        alert("¡Has aprobado!")
    }
    else{
        alert("Lo siento, has suspendido. Esfuérzate más la próxima vez.")
    }
}
else{
    alert("Debes sacar mínimo un 4'5 en cada uno para poder aprobar, lo siento, has suspendido");
}