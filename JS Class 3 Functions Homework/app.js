/*
Student Exercise - #3
The Age Calculator

Forgot how old you are? Calculate it!

    Write a function named calculateAge that:
    takes 2 arguments: birth year, current year.
    calculates the age based on those years.
    outputs the result to the screen like so: "You are NN years old"
    Call the function three times with different sets of values.
    Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
    Time to accomplish: 15 minutes.
*/
/*
let birthYearInput = prompt("Enter your birth year!");

let birthYearNumber = Number(birthYearInput);

let inputYearLength

let presentYear = new Date().getFullYear();

function howOldAreyou(birthYearNum, presentYear){
    let result = presentYear - birthYearNum;
    alert(`You are ${result} years old`);
}

if(birthYearInput !== null){
    inputYearLength = birthYearInput.length;
}else{
    alert("Enter 4 digit birth year!")
    inputYearLength = 0
}

if(Number.isNaN(birthYearNumber) || inputYearLength !== 4){
    alert("Enter 4 digit birth year!")
}else{
    howOldAreyou(birthYearNumber, presentYear);
    
}

//Function calling 3 times 

//Fist call 
let ageFirst = howOldAreyou(1903, 2023);


//Second call
let ageOne=1939;
let ageTwo=1965;
howOldAreyou(ageOne, ageTwo);


//Third Call

let ageThree = 2023;
howOldAreyou(1939, ageThree);

*/

/*HOMEWORK Part 1

Write a JavaScript function which accepts a parameter and returns its type and prints it in the console. Try to call the functions 5 times for 5 different types:

    object
    boolean
    number
    string
    undefined*/
/*
function typeChecker(input){
    let result= typeof input;
    console.log(`This variable is ${result} `)
}

let object = null;
typeChecker(object);


let boolean = 10 > 11;
typeChecker(boolean);


let number = 1233;
typeChecker(number);


let string = "hi people"
typeChecker(string);


let defineMe
typeChecker(defineMe)
*/

/*
HOMEWORK Part 2

Write a JavaScript function that will return:

    Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
    Note: Call the function in console to see answer
    Bonus: Make the same function work for converting dog to human years as well

*/

/*let humanDogInput = prompt("Inser 1 to calculate dog years from human years, insert 2 to calculate human years from dog years.");

let humanDog = Number(humanDogInput);

let yearsToConvert = prompt("Insert number of years to convert");

let yearsToNumber = Number(yearsToConvert);

function humanDogConversion(humanOrDog, yearsToConvert){
  if(humanOrDog > 3){
    alert("Inser 1 to calculate dog years, insert 2 to calculate human years.");
  }else if(humanOrDog ===1){
    let result = yearsToConvert * 7;
    console.log(`This dog is ${result} dog years old`)
  }else if(humanOrDog === 2){
    let result = yearsToConvert / 7;
    console.log(`This dog is ${result} human years old`)
  }else{
    console.log("Invalid input")
  }
}

humanDogConversion(humanDog, yearsToNumber);
*/
/*HOMEWORK Part 3

Write a javascript function for an ATM:

    The ATM should give cash
    Should return "Not enough money" if you request more money
    Should return the amount withdrawn and money left on the account if you have enough
    Note: Hardcode your account money in the program
    Bonus: Make it work with prompt()!
*/
/*
let moneyBalance = 4000;

let withdrawInput  = prompt("Please insert ammount to be withdrawn.") 

let moneyWithdraw = Number(withdrawInput);

function withdrawal(balance, withdraw){
    let remainAmmount = balance - withdraw;
    return remainAmmount;
}

if (moneyWithdraw <= moneyBalance){
    let remainingMoney = withdrawal(moneyBalance, moneyWithdraw);
    moneyBalance = remainingMoney
        alert(`You have ${remainingMoney} $ remaining on your account`)
}else{
    alert("Not enought money")
}

alert(`The balance after this transaction is ${moneyBalance}.`)
*/

//Zodiac in switch
/*
let userInput = prompt("Insert your birth year:");

let birthYear = Number(userInput);

let zodiacRefNum = (birthYear - 4) % 12;

let inputLength;

if (userInput !== null) {
  inputLength = userInput.length;
} else {
  alert("You pressed cancel...");
  inputLength = 0;
}

switch (zodiacRefNum) {
  case 0:
    alert("Your Chinese zodiac sign is Rat!");
    break;
  case 1:
    alert("Your Chinese zodiac sign is Ox!");
    break;
  case 2:
    alert("Your Chinese zodiac sign is Tiger!");
    break;
  case 3:
    alert("Your Chinese zodiac sign is Rabbit!");
    break;
  case 4:
    alert("Your Chinese zodiac sign is Dragon!");
    break;
  case 5:
    alert("Your Chinese zodiac sign is Snake!");
    break;
  case 6:
    alert("Your Chinese zodiac sign is Horse!");
    break;
  case 7:
    alert("Your Chinese zodiac sign is Goat!");
    break;
  case 8:
    alert("Your Chinese zodiac sign is Monkey!");
    break;
  case 9:
    alert("Your Chinese zodiac sign is Rooster!");
    break;
  case 10:
    alert("Your Chinese zodiac sign is Dog!");
    break;
  case 11:
    alert("Your Chinese zodiac sign is Pig!");
    break;
}*//**/