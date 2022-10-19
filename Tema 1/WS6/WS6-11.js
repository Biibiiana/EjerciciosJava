columns = parseInt(prompt("Introduce el número de columnas: "));
width = prompt("Introduce el ancho de las celdas: ");
height = prompt("Introduce la altura de las celdas: ");

document.write("<table border=”0” cellspacing=”2”>");
document.write("    <tr bgcolor=”white” height=”50”>");

for (let i=1; i<=columns; i++)
{
    document.write("        <td width='"+width+"' height='"+height+"' bgcolor='white'>");
}

document.write("    </tr>");
document.write("</table>");