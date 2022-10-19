const fibonacci = function(n) {
    if (n < 3) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
    }

let fibonacci1 = (n) => {if (n < 3) return 1;
    return fibonacci1(n - 1) + fibonacci1(n - 2);
}