/*Generating arrays


2-Generate an array that has all the numbers that are divisible by 4 from 1 to 1000

3-Generate an array that has all the numbers that end with the digit 1 from 1 to 1000

*/

//1-Generate an array that has all the numbers that are divisible by 3 from 1 to 1000

let finalNum = 1000;

let firstArray = [];
let secondArray = [];
let thirdArray = [];

function numArray(finalNum, moduloCondition, moduloResult) {
  let array = [];
  for (let i = 1; i < finalNum; i++) {
    if (i % moduloCondition === moduloResult) {
      array.push(i);
    }
  }
  //console.log(array);
  return array;
}

let array = numArray(100, 3, 0);
//console.log(array);

for (let i = 1; i <= finalNum; i++) {
  if (i % 3 === 0) {
    firstArray.push(i);
  }
}
//console.log(firstArray);

//2-Generate an array that has all the numbers that are divisible by 4 from 1 to 1000
for (let i = 1; i <= finalNum; i++) {
  if (i % 4 === 0) {
    secondArray.push(i);
  }
}

//console.log(secondArray);

//3-Generate an array that has all the numbers that end with the digit 1 from 1 to 1000

for (let i = 1; i < finalNum; i++) {
  if (i % 10 === 1) {
    thirdArray.push(i);
  }
}
//console.log(thirdArray);

/*Clean arrays
Create a function that cleans an array of any values and leaves only STRINGS
Create a function that cleans an array of any values and leaves only NUMBERS
Create a function that cleans undefined, null, NaN, and "" and leaves all other values
Test arrays:*/
const testArr = [
  true,
  false,
  12,
  13,
  44,
  2345,
  "Bob",
  "Jill",
  false,
  undefined,
  1000,
  null,
  "Jack",
  "",
  "",
  99,
  "Greg",
  undefined,
  NaN,
  1,
  22,
];

//Create a function that cleans an array of any values and leaves only STRINGS
let cleanStringArray = [];

for (let i = 0; i < testArr.length; i++) {
  if (typeof testArr[i] === `string` && testArr[i].length > 0) {
    cleanStringArray.push(testArr[i]);
  }
}
console.log(cleanStringArray);

//Create a function that cleans an array of any values and leaves only NUMBERS

let cleanNumberArray = [];

for (let i = 0; i < testArr.length; i++) {
  if (typeof testArr[i] === `number` && !Number.isNaN(testArr[i])) {
    cleanNumberArray.push(testArr[i]);
  }
}
console.log(cleanNumberArray);

//Create a function that cleans undefined, null, NaN, and "" and leaves all other values

let cleanFalsyArray = [];

for (let i = 0; i < testArr.length; i++) {
  if (testArr[i]) {
    cleanFalsyArray.push(testArr[i]);
  }
}
console.log(cleanFalsyArray);
