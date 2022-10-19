columns = parseInt(prompt("Introduce el número de columnas: "));
rows = parseInt(prompt("Introduce el número de filas: "));
width = prompt("Introduce el ancho de las celdas: ");
height = prompt("Introduce la altura de las celdas: ");

document.write("<table border=”0” cellspacing=”2”>");
document.write("    <tr bgcolor=”white” height=”50”>");

for (let i=1; i<=rows; i++)
{
    document.write("        <tr bgcolor=”white” height=”50”>");
    for (let j=1; j<=columns; j++)
    {
        document.write("        <td width='"+width+"' height='"+height+"' bgcolor='white'>");
    }
    document.write("        </tr>");
}


document.write("    </tr>");
document.write("</table>");