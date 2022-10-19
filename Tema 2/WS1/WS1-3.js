function timer(){
    counter = 60;
    do {
        (function(counter){
            setTimeout(function(){
                document.open();
                document.write("Cuenta atrás: "+counter+"<br/>");
            }, 1000*counter)
        })(counter--)
    }
    while (counter!=-1)
}
timer();
document.write("¡Se acabó el tiempo! <br/>");
//setTimeout(timer, 1000);
//https://stackoverflow.com/questions/37728184/settimeout-method-inside-a-while-loop