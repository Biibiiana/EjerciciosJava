function countTheArgs (...nums){
    let counter = 0;
    for(let value of arguments){
        counter += 1;
    }
    return counter;
}

//document.write(countTheArgs('cat','dog'));
document.write(countTheArgs('cat','dog','frog','bear'));
