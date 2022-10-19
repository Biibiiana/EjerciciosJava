function combineTwoArrays(array1, array2){
    const combined = [...array1, ...array2];
    return combined;
}

let uno = [1,2,3];
let dos = [4,5,6];

document.write(combineTwoArrays(uno, dos));