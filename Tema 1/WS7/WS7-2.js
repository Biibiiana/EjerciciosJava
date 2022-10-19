function addOnlyNums(...nums){
    let counter = 0;
    for(let value of nums){
        if(isNaN(value)==false){
            counter += value;
        }
    }
    return counter;
}

document.write(addOnlyNums(1,"cat",3,4));