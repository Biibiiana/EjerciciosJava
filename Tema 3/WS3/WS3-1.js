let num = [1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,200,500,1000];
let str = ["La", "casa", "periplo", "onomatopella", "esternocleidomastoideo"]

//find largest number
let largestNumber = num.reduce((max, num) => (num > max ? num : max));
console.log(largestNumber);

//find longest string
let longestString = arrayStr.reduce((a, b) => (a.length > b.length ? a : b));
console.log(largestStr);

// Find even numbers
let evenNumbers = num.filter((number) => number % 2 == 0);
console.log(evenNumbers);

// Find odd numbers
let oddNumbers = num.filter((number) => number % 2 != 0);
console.log(oddNumbers);

// Find words that contain "is"
let findIs = str.filter((cad) => cad.toLowerCase().includes("is"));
console.log(findIs);

// Assert all numbers are divisible by three
let divisibleByThree = num.filter((number) => number % 3 == 0);
console.log(divisibleByThree);

// Zip two arrays together
let twoArraysTogether = num.concat(str);
console.log(twoArraysTogether);

// Sort joined array from smallest to largest
let sortedArray = twoArraysTogether.sort((a, b) => a - b);
console.log(sortedArray);

// Remove the first word in the array
str.shift();
console.log(str);

// Place a new word at the start of the array
str.unshift("grafista");
console.log(str);

// Replace some elements
str.splice(0,3,"Erase","una","vez");
console.log(str);