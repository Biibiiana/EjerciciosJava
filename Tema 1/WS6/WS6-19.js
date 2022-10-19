const measure = 8;
size = parseInt(prompt("Introduce el lado de cada celda: "));

document.write("<table border=”0” cellspacing=”2”>");
document.write("    <tr>");

for (let i=1; i<=measure; i++)
{
    document.write("        <tr>");
    for (let j=1; j<=measure; j++)
    {
        if ((i+j) % 2 == 0) {
            document.write("         <td width='"+size+"' height='"+size+"' bgcolor='white'>");
        }
        else {
            document.write("          <td width='"+size+"' height='"+size+"' bgcolor='black'>");
        }
    }
    document.write("        </tr>");
}

document.write("    </tr>");
document.write("</table>");