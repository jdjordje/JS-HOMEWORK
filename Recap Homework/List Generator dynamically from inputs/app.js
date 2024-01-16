/*- Create 3 inputs:
  - Color
  - FontSize
  - Items
- Create a button for generating unordered lists
- When the button is clicked generate a new ul element with the color, font size, and items from the inputs

> Items should be added separated by "," in the input*/

const color = document.querySelector(`#color`);
const fontSize = document.querySelector(`#fontSize`);
const items = document.querySelector(`#items`);
const display = document.querySelector(`.display`);
const bTn = document.querySelector(`#bTn`);

function clearInput(){
    color.value = "";
    fontSize.value = "";
    items.value = "";
}

function checkForEmptyInput(color,fontSize,items){
  if(color.value === "" ||
   fontSize.value === "" ||
    items.value === ""){
      return false;
  }return true;
}


bTn.addEventListener(`click`,function(){
  
  if(!checkForEmptyInput(color, fontSize,items)){
    alert(`Please fill all inputs`)
    return;
}


   const unordered = document.createElement(`LI`);
    console.log(color.value)
   unordered.innerText = `${color.value},${fontSize.value},${items.value}`;

   display.appendChild(unordered);

   
   clearInput();
    
});