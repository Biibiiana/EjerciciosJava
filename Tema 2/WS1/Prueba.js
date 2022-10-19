function saludos(nombre, rol){
    console.log(`Hola, mi nombre es ${nombre}`);
    console.log(`Yo soy ${rol}`);
  }
  
  setTimeout(saludos, 3000, "Nathan", "Programador");