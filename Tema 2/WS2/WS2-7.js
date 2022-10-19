document.write("<table border=”0” cellspacing=”2”>");

for (let i=1; i<=100; i++)
{
    document.write("    <tr bgcolor=”white” height=”50”>");
    document.write("        <td width='20px' height='20px' bgcolor='white'>"+i+"</td>");
    document.write("        <td width='20px' height='20px' bgcolor='white'>"+Math.sin(i)+"</td>");
    document.write("    </tr>");
}

document.write("</table>");