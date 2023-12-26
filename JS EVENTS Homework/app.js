/*
Homework
Create a dynamic table

Write a Javascript function that will dynamiclly create a table
User should input the number of Colums and Rows
In every table cell print which row and column it is (ex. Row-3 Column-1)
Don't forget to use google! :)
 */

const tableBody = document.querySelector("#tableBody");
const rowInput = document.querySelector("#rows");
const columnInput = document.querySelector("#columns");
const generateTableBtn = document.querySelector("#generateTable");

 function generateOneTable (rows,columns){
    let generate = "";
    for(let i = 0; i < rows; i++){
        generate += `<tr>`
            for(let j = 0; j < columns; j++){
                generate += `<td>Row -${i+1} Column-${j+1} </td>`
            }
        generate += `</tr>`    
    }tableBody.innerHTML =`${generate}`;

 };

 generateTableBtn.addEventListener(`click`, function(){
    generateOneTable(rowInput.value, columnInput.value)
 })
 
