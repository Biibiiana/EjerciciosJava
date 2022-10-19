function sumEveryOther(group, ...numbers){
    let counter = 0;
    for(let value in numbers){
        if(!(value in group)){
            counter += value;
        }
    }
    return counter;
}

let list = [1,2,3];

document.write(sumEveryOther(list, 1));