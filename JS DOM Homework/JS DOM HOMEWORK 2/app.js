/*
HOMEWORK Part 2

Print all numbers from an array and the sum

    Create an array with numbers
    Print all numbers from the array in a list element, in a new HTML page
    Print out the sum of all of the numbers below the list
    Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)

 */

    const paragraphOne = document.querySelector("#firstParagraph")
    const sumOfNumber = document.querySelector("#sumOfNumber")

        function calculateArray(arrayNums, element){
        element.innerHTML = "";  
        let array = [];
        let listItem = ""
        for(let i = 1; i <= arrayNums;i++){
             array.push(i);
               
             listItem += `<li>${i}</li>`;  
        }element.innerHTML += `<ul>${listItem}</ul>`

        let sum = 0;
         for(let num of array){
            sum += num;
         }
         element.innerHTML+= `<p>The sum of the array is ${sum}</p><hr>`
        element.innerHTML+=`<p>The equasion is:`
        let equationNum =""
         for(let i = 0;i<array.length-1;i++){
           equationNum += `${array[i]}+`
         } element.innerHTML +=`${equationNum}${array[array.length-1]}=${sum}</p>`
        
        
    }
        calculateArray(20, paragraphOne)