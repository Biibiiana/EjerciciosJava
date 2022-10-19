function squareAndSum(group){
    let counter = 0;
    for(let value of group){
        let square = value*value
        counter = counter+square;
    }
    return counter;
}

//let numbers = [2,4,3];
let numbers = [1,2];

document.write(squareAndSum(numbers));