/*## List generator from an array

- Create an array of 5 names
- Create an HTML page with:
  - A header
  - An empty unordered list
  - A button
- When the button is clicked it should fill in the empty unordered list with the names of the array*/

const list = document.querySelector(`.unordered`);
const button = document.querySelector(`#button`);

const array = ["Sun Tzu", "Genghis Khan","Alexander the Great", "Hannibal", "Erwin “Desert Fox” Rommel"];

function generateList(array){
    for(let name of array){
        list.innerHTML += `<li>${name}</li>`
    }
}

button.addEventListener(`click`, function(){
    list.innerHTML ="";
    generateList(array);
    
})