function factorial(n){
    resultado = 0;
    if(n == 0){
        resultado = 1;
    }
    else{
        resultado = n * factorial(n-1);
    }
}

numero = prompt("Introduce el número para el factorial: ");
factorial(numero);