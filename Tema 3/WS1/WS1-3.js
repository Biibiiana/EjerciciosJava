function dado() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  function tiradas() {
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;
    let count6 = 0;
  
    for (i = 0; i < 6000; i++) {
      tiro = dado();
      if(tiro === 1){
          count1 ++;
      }
      else if(tiro === 2){
          count2 ++;
      }
      else if(tiro === 3){
          count3 ++;
      }
      else if(tiro === 4){
          count4 ++;
      }
      else if(tiro === 5){
          count5 ++;
      }
      else if(tiro === 6){
          count6 ++;
      }
      }
  
      document.write("<h1>Número de veces que sale cada número: </h1></br>");
      document.write("1 --->" + count1 + "</br>");
      document.write("2 --->" + count2 + "</br>");
      document.write("3 --->" + count3 + "</br>");
      document.write("4 --->" + count4 + "</br>");
      document.write("5 --->" + count5 + "</br>");
      document.write("6 --->" + count6 + "</br>");
    }
  
  
tiradas();