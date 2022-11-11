
document.write('<table border="1">');
for (let i = 0; i < 100; i++) {
    document.write('<tr>');
    for (let j = 0; j < 100; j++) {
        document.write('<td style="width: 10px; height: 10px;"></td>');
    }
    document.write('</tr>');
}
window.onload = function() {
    document.querySelectorAll('td').forEach(function(td) {
        td.onmouseover = function(e) {
                if (e.ctrlKey === true) {
                    e.target.style.backgroundColor = "red";
                } else if (e.shiftKey === true) {
                    e.target.style.backgroundColor = "blue";
                }
            }
        });
}