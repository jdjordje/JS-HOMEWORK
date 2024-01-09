const buttons = document.querySelectorAll(`button`);
const display = document.querySelector(`#display`);
display.style.fontSize = "2rem";

//console.log(display, buttons);

//function to clear all
function clearAll(button) {
  if (button === "C") {
    display.value = "";
    string = "";
    // array.length = 0;
    numbers = [];
    operators = [];
    string = "";
  }
}

//function to filter the numbers
function filterNumbers(numbers, array) {
  for (let i = 0; i < array.length; i++) {
    if (!isNaN(array[i])) {
      numbers.push(Number(array[i]));
    }
  }
}

function filterOperator(operators, array) {
  for (let i = 1; i < array.length; i++) {
    if (isNaN(array[i])) {
      operators.push(array[i]);
    }
  }
}

function sum(numbers, operators) {
  let result = numbers[0];

  for (let i = 0; i < operators.length; i++) {
    const operator = operators[i];
    const number = numbers[i + 1];

    /* if(operator === "+"){
      result += number;
    }else if (operator ==="-"){
      console.log(`odzemanje`);
      result -= number;
    }else if (operator ==="*"){
      result *= number;
    }else if (operator ==="/"){
      if(number !== 0){
      result /= number}else{
        result = `Error`;
      }
    }else{
      console.log(`nisto`)
    }*/
   
    switch (operator) {
      case "+":
        result += number;
        break;
      case "-":
        result -= number;
        break;
      case "*":
        result *= number;
        break;
      case "/":
        //trying to erase infinity***
        if (number !== 0) {
          result /= number;
        }
        display.value = "EROR"
        break;
      default:
        display.innerText = "Error";
        break;
    }
  }
  display.value = result;
  numbers = [];
  operators = [];
  string = "";
}

function doubleZero(input){
  if(input.charAt(0) === "0" && input.charAt(1) === "0"){
    console.log(`*********************`);
    display.value = "0";
  }
}

function firstNumZeroSecondNumNot(input){
  if(input.charAt(0) === "0" && /[123456789]/.test(input.charAt(1))){
    display.value = display.value.charAt(1);
  }
}


let string = "";
let array = [];
let numbers = [];
let operators = [];

// adding button listeners
for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i].value;


  buttons[i].addEventListener(`click`, function () {
    console.log(`press${button}`);

    if (display.value === 0) {
      display.value = "";
    }
    display.value += button;


    //trying to limit the dots...)

    //console.log(`last index`, display.value.lastIndexOf("+"))

    //console.log(`substring`, display.value.substring(display.value.lastIndexOf(/([+\-*/=])/)+1, display.value.length))

    //checkig 00000 at begining
    doubleZero(display.value)
    
    //checking if after the input of zero and number from 1-10 is written it displays only the number
    firstNumZeroSecondNumNot(display.value)

    //deleting last One ***
      if(button === "erase" ){
      console.log(`YOU HAVE BEEN ERASED`);
      display.value = display.value.length-1;
    }

    //not working
    if(display.value === Infinity){
      display.value = `error`
    }

    //passing display value toa string
    string = display.value;
    if (string.length > 10) {
      console.log(`long`);
    }
    //spliting string to array
    array = string.split(/([+\-*/=])/);

    filterNumbers(numbers, array);
    console.log(`numbers array`, numbers);

    filterOperator(operators, array);
    console.log(`operator array`, operators);

    console.log(`full array`, array);
    //console.log(string);

    clearAll(button);
    if (button === "=") {
      sum(numbers, operators);
      if(sum === Infinity){
        display.value = `ERROR`
      }
    }
    

    numbers = [];
    operators = [];
    string = "";
  });
}
