/*HOMEWORK Part 1

Change the page with JavaScript

    Change the text of all paragraphs and headers with javascript
    Note:The html must not be changed
    */


const firstDiv = document.querySelector("#firstDiv")
const secondDiv = document.querySelector(".second-div")
const thirdDiv = secondDiv.nextElementSibling;

const h1fistDiv = firstDiv.querySelector("h1");
const p1firstDiv = firstDiv.querySelector("p");

const secondDivParagraph = secondDiv.querySelector("p");

const thirdDivH1 = thirdDiv.querySelector("h1");
const thirdDivH3 = thirdDiv.querySelector("h3");

h1fistDiv.innerText = "I have changed heading 1 of DIV 1";
p1firstDiv.innerText ="Changed the paragraph too..."

secondDivParagraph.innerText ="Another paragraph goes away..."

thirdDivH1.innerText="Another one"
thirdDivH3.innerText="Bites the dust"