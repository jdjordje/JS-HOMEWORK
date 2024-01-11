/*Title Generator
Create 3 inputs:
Color
FontSize
Text
Create a button for generating titles
When the button is clicked generate a new h1 element with the color, font size, and text from the inputs*/

const color = document.querySelector(`#color`);
const fontsize = document.querySelector(`#fontsize`);
const inputText = document.querySelector(`#inputText`);
const body = document.querySelector(`body`);

const btn = document.querySelector(`#btn`);

btn.addEventListener(`click`, function () {
  const headEl = document.createElement(`H1`);
  console.log(`click`);

  headEl.style.color = color.value;
  headEl.style.fontSize = `${fontsize.value}px`;
  headEl.innerText = inputText.value;

  document.querySelector(`.container`).appendChild(headEl);
});
