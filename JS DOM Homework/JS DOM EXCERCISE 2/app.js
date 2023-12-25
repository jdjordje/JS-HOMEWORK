
/*Student Exercise - #2
Weight calculator in chickens

Want to know how you wiegh in chikens? No problem!

    Write a function named weightInChickens that:
    Takes an input weigh in kilograms
    Calculates weight in chickens ( 1 chicken = 0.5kg )
    The input should be entered through prompt
    The result should be shown in the HTML of the page
    Note:The html page needs to have title and result paragraph*/

const headingOne = document.querySelector("h1")
const div = document.querySelector("div")
let weigh = Number(prompt("Enter you chicken weight!"))
    while(Number.isNaN(weigh)){
        alert("inser a proper number")
        weigh = Number(prompt("Enter you chicken weight!"))
    }
    
function weighInChickens(weigh){
    let numberOfChickens = weigh / 0.5;
    headingOne.innerText = "HERE IS YOU WEIGHT IN CHICKENS SIR!"
    div.innerText = `You have ${numberOfChickens} chickens in ${weigh}kg`
}

weighInChickens(weigh);