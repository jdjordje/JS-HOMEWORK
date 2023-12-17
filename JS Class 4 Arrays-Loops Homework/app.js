/*
HOMEWORK #1

Create a function called tellStory()

The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )

The function should return one big string with a story made from the arguments

Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.

The value that is returned from the function should be printed in the console or in alert
*/
/*
function tellStoryTwo(name, mood, activity){
    if(typeof(name) !== "string" || typeof(mood) !== "string" ||typeof(activity) !== "string") {
        return alert("Please insert all parameters as strings!")
    }else{
        return alert(`This is ${name}. ${name} is a nice person. Today he is in ${mood}. He is ${activity} all day. The end.`)
    }
}

tellStoryTwo("Pero","nervous","eating");

/*
HOMEWORK #2

Write a function that will take an array of 5 numbers as an argument and return the sum.

Print it in the console or in alert

BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number. If one of the numbers of the array is invalid show an error message instead of a result.
*/
/*
let array = [1,2,3,4,5];

function fiveNumberArrayCal(array){
     if(array.length !== 5){
         return alert("Your array does not have 5 numbers")
     }
     
     let sum = 0;
     for(let number of array)
     {sum += number;      
     }
     validateNumber(array)
     return alert(`The sum of the array is: ${sum}`);
 }

 function validateNumber(array){
    for(let item of array){
     if(typeof item !== "number"){
         return alert("You have invalid input")
     }
    }
 }

 fiveNumberArrayCal(array)

 /*
HOMEWORK #3

Write a javascript function that:

    When given any array of strings (should work with array with any number of elements)
    It will create one big string and return it
    Ex:["Hello", "there", "students", "of", "SEDC", "!"]
    Result: "Hello there students of SEDC !"


*/

//Solution 1 
/*let array =["Hello", "there", "students", "of", "SEDC", "!"];

function makeBigstring(array){
    return console.log(`"${array.join(" ")}"`)
}

makeBigstring(array)*/

//Solution 2
/*
let array =["Hello", "there", "students", "of", "SEDC", "!"];

function makeABigOne(array){
let bigString ="";
for(i = 0; i < array.length ;i++){
    bigString = `${bigString} ${array[i]}`;
}
return console.log(`"${bigString}"`)
}

makeABigOne(array)*/

/*
Homework #4

Title: Looping structures

Description:Write a loop in javascript that goes from 1-20 that will print each number in the console and add "number is even" after every even number and add "number is odd" after every odd number
*/
/*
for (let i = 1; i <= 20; i++){
    if(i%2 === 0){
        console.log(`The number ${i} is even number`)
    }else{
        console.log(`The number ${i} is odd number`)
    }
}
*/
/*

Homework #5

Title: Looping structures

Description: Write a JavaScript function that will return:
The sum of the MAX and MIN numbers from an array with numbers
Ex: arr = [3, 5, 6, 8, 11]
Output: Max: 11, Min: 3, Sum: 14

Bonus: Try making the function work if there are other types of items in it
*/
/*
let array = [3, "dsd", 6, 8, 11,150,250,null,,]

function minimumMaximumSum(array){
    let numberOnlyArray=[];

    for(let item of array){
        if(typeof item !== "number"){
        continue
    } 
    else if(typeof item === "number"){
        numberOnlyArray.push(item)
    }
}

let maxNumber = Math.max(...numberOnlyArray);
let minNumber = Math.min(...numberOnlyArray);
let resultSum = maxNumber + minNumber;
return console.log(`Max:${maxNumber}, Min: ${minNumber}, Sum: ${resultSum}`)

} 

minimumMaximumSum(array)*/

/*Homework #6

Title: Looping structures

Description:Write a javascript function that:
When given 2 arrays of students firstNames and lastNames will return a new array with students full names
Every name should have a numeric value before it
Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]*/
/*
let arrayFistName = ["Mick", "John" , "Jill","Stewie"]
let arrayLastName = ["Jagger","Doe","Smith", "Griffin"]

function fullNameList(arrayOne, arrayTwo){
    let fullNameList =[];
    let finalArrayLegth
    if(arrayOne.length > arrayTwo.length){
        finalArrayLegth = arrayOne.length
    }else{
        finalArrayLegth = arrayTwo.length
    }
    
    for(let i = 0; i < finalArrayLegth; i++){
        fullNameList.push((i+1)+ "." + arrayOne[i] + " "+ arrayTwo[i])
    }
    
    return fullNameList;
}

console.log(fullNameList(arrayFistName, arrayLastName))*/