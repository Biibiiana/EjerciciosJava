
document.write('<table border="1">');
for (let i = 0; i < 100; i++) {
    document.write('<tr>');
    for (let j = 0; j < 100; j++) {
        document.write('<td style="width: 10px; height: 10px;"></td>');
    }
    document.write('</tr>');
}

window.onload=()=>{colorsTable()}

function colorsTable() {
  td = document.querySelectorAll('td');
  bottomClear = document.getElementsByTagName('input')[1];

  td.forEach(function(td) {
    td.onmouseover = function(e) {
      if (e.ctrlKey === true) {
          e.target.style.backgroundColor = "red";
      } 
      else if (e.shiftKey === true) {
          e.target.style.backgroundColor = "blue";
      }
      else if (e.altKey === true) {
          e.target.style.backgroundColor = "white";
      }
    }
  });
  
  bottomClear.onclick = function() {
    td.forEach(function(td) {
      td.style.backgroundColor = "white";
    });
  }
  /*bottomClear.addEventListener('click', function() {
    for (let i = 0; i < td.length; i++) {
      td[i].style.backgroundColor = "white";
    }
  });*/
};

