let str = [
    "Juan",
    "Luis",
    "Jesús",
    "José",
    "Antonio",
    "Valeriano",
    "Adrián",
  ];
  
  let onlyJ = str.filter((name) => name.charAt(0) == "J");
  onlyJ.sort();
  
  console.log(onlyJ);