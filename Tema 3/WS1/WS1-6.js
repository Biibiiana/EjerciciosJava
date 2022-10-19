function potencia(base, exponente){
    if(exponente == 0){
        return 1;
    }
    else{
        return base * potencia(base, exponente - 1);
    }
}

base = prompt("Introduce la base para la potencia: ");
exponente = prompt("Introduce el exponente para la potencia: ");
document.write(potencia(base, exponente));