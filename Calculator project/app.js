const buttons = document.querySelectorAll(`button`);
const display = document.querySelector(`#display`);
display.style.fontSize = "2rem";


//function to clear all
function clearAll(button) {
  if (button === "C") {
    display.value = "";
    string = "";
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
        if (number === 0) {
          display.value = "Error";
          return;
        }
        result /= number;

        break;
      default:
        display.innerText = "Error";
        break;
    }
  }
  display.value = result;
  numbers.push(result);
  numbers = [];
  operators = [];
  string = "";
}

function doubleZero(input) {
  if (input.charAt(0) === "0" && input.charAt(1) === "0") {
    display.value = "0";
  }
}

function firstOperatorInput(input) {
  if (input.charAt(0) === "+" || input.charAt(0) === "-" || input.charAt(0) === "/" || input.charAt(0) === "*" ) {
    display.value = "";
  }
}


function firstNumZeroSecondNumNot(input) {
  if (input.charAt(0) === "0" && /[123456789]/.test(input.charAt(1))) {
    display.value = display.value.charAt(1);
  }
}

let string = "";
let array = [];
let numbers = [];
let operators = [];
let regexOperators = /[+\-*\/]{2,}/;

// adding button listeners
for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i].value;

  buttons[i].addEventListener(`click`, function () {
      if (display.value === 0) {
      display.value = "";
    }
    display.value += button;

    //trying to limit the dots
    //getting the last operator from string
    let lastOperatorPosition = Math.max(
      display.value.lastIndexOf("+"),
      display.value.lastIndexOf("-"),
      display.value.lastIndexOf("*"),
      display.value.lastIndexOf(`/`)
    );

    //setting substring, trimming it
    let lastNumberInString = display.value.substring(lastOperatorPosition + 1, display.value.length);

    let trimmedString = lastNumberInString.substring(0, lastNumberInString.length - 1);

    //if statement that gets the second decimal
    if (trimmedString.includes(".")) {
      if (lastNumberInString.charAt(lastNumberInString.length - 1) === ".") {
        display.value = display.value.substring(0, display.value.length - 1);
      }
    }

    //limiting consecutive operators
    if (regexOperators.test(display.value)) {
      display.value = display.value.substring(0, display.value.length - 1);
    }

    //checkig 00000 at begining
    doubleZero(display.value);

    //clearing if first operator is clicked
    firstOperatorInput(display.value);

    //checking if after the input of zero and number from 1-10 is written it displays only the number
    firstNumZeroSecondNumNot(display.value);

    //deleting last One
    if (button === "erase") {
      display.value = display.value.substring(0, display.value.length - 6);
    }

    //passing display value to a string
    string = display.value;

    if (string.length > 22) {
      display.value = "ERROR string too big";
      
    } else if (string.length > 12) {
      display.style.fontSize = "1rem";
      display.style.wordWrap = "break-word";
      //display.value = `Too long operation-error`;
    } else {
      display.style.fontSize = "2rem";
    }
    //spliting string to array
    array = string.split(/([+\-*/=])/);

    filterNumbers(numbers, array);

    filterOperator(operators, array);
 

    if (button === "=") {
      sum(numbers, operators);
    }

    clearAll(button);
    numbers = [];
    operators = [];
    string = "";
  });
}
