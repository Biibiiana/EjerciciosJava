columns = parseInt(prompt("Introduce el número de columnas: "));
width = prompt("Introduce el ancho de las celdas: ");
height = prompt("Introduce la altura de las celdas: ");

i = 1;

document.write("<table border=”0” cellspacing=”2”>");
document.write("    <tr bgcolor=”white” height=”50”>");

while (i<=columns)
{
    if (i % 2 == 0) {
        document.write("        <td width='"+width+"' height='"+height+"' bgcolor='white'>");
        i++;
    }
    else {
        document.write("        <td width='"+width+"' height='"+height+"' bgcolor='black'>");
        i++;
    }
}

document.write("    </tr>");
document.write("</table>");