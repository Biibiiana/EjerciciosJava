document.write("<table  border = \"1\" cellspacing = \" 2 \" bgcolor = \" white \" width = \" 200 \">");
for(elem in window){
    document.write("<tr bgcolor = \" white\" height = \" 50 \">");

    document.write("<td widht=\"50\"> ${elem} </td>");
    document.write("<td widht=\"50\"> ${window[elem]} </td>");

    document.write("</tr>");
};
document.write("</table>");