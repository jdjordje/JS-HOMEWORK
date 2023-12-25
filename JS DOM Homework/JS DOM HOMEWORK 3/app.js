/*
BONUS HOMEWORK

Create a recipe page from inputs

    Ask the user for the name of the recipe
    Ask the user how many ingredients do we need for the recipe
    Ask the user for the name of every ingredient
    Print the name of the recipe in the HTML as heading element, ex: h1-h6
    Print all ingredients as an unordered list in the HTML
    Extra: Use a table if you want to be fancy :)

*/

const recipeeName = document.querySelector(".recipeeName");
const ingredientBox = document.querySelector(".ingredientBox");

let recipe = prompt("Please insert the name of your recipe!");

recipeeName.innerText += recipe;


let itemArray = [];
let input = Number(prompt("Inser number of ingredients!"));

if (Number.isNaN(input)) {
  alert("Please inser valid number of ingredients!");
} else {
  itemArray.length = input;
}

for (let i = 0; i < itemArray.length; i++) {
  item = prompt(`Please insert your ${i + 1} ingredient!`);
  itemArray[i] = item;
}

itemList = "";
for (let item of itemArray) {
  itemList += `<li>${item}</li>`;
}
ingredientBox.innerHTML += `<ul>${itemList}</ul>`;

itemTable = "";
for (let item of itemArray) {
  itemTable += `<tr><td>${item}</td></tr>`;
}
ingredientBox.innerHTML += `<table border="1" >
    <thead>
        <tr>
            <th>Ingredients</th>
        </tr>
    </thead>
    <tbody>${itemTable}</tbody>
    </table>`;
