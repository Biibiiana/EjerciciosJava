for (let i=1; i<=10; i++)
{
    document.write("Tabla del "+i+": <br>");
    for (let j=0; j<=10; j++)
    {
        let resultado = i * j
        document.write(j+"x"+i+"="+resultado+"<br>");
    }
    document.write("<br>");
}
