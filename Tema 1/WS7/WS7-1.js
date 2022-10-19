function sum_nums(...nums){
    let counter = 0;
    for(let value of nums){
        counter += value;
    }
    return counter;
}

document.write(sum_nums(1,3,5,7,9,11,13,15));