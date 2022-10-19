function onlyUniques(group){
    let solution = ([...new Set(group)]);
    return solution;
}

//let numbers = [1,1,2,3,3,5,6,7,7,8,9,9];
//let numbers = ['cat','cat','dog','pig'];
let numbers = [1,4,7,1,2,7,4];

document.write(onlyUniques(numbers));