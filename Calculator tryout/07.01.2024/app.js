const buttons = document.querySelectorAll(`button`);
const display = document.querySelector(`#display`);

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

  for (let i = 0; i < operators.length - 1; i++) {
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
        if(numbers[numbers.length-1] !== 0){
            display.value = `error`
        }
        result /= number;
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


// adding button listeners
for (let i = 0; i < buttons.length; i++) {
  let button = (buttons[i].innerHTML = buttons[i].value);
  let string = "";
  let array = [];
  let numbers = [];
  let operators = [];
  
  buttons[i].addEventListener(`click`, function () {
    console.log(`press${button}`);
    
    if (display.value === 0) {
      display.value = "";
    }
    display.value += button;
    //trying to limit the dots...)
    
    
    //passing display value toa string
    string = display.value;

    //spliting string to array
    array = string.split(/([+\-*/=])/);

    filterNumbers(numbers, array);
    console.log(`numbers array`, numbers);

    filterOperator(operators, array);
    console.log(`operator array`, operators);

    console.log(`full array`, array);
    // console.log(string);

    
        
    clearAll(button);
    if (button === " = ") {
      sum(numbers, operators);
    }       
    array.push(display.value)

   
    numbers = [];
    operators = [];
    string = "";
  });
}

