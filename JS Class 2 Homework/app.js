/*HOMEWORK

Write javascript code that will get an input from the user and calculate which Chinese Zodiac a given year is in

Formula for Chinese Zodiac caluclation: (year - 4) % 12. Possible values:

    0 - Rat
    1 - Ox
    2 - Tiger
    3 - Rabbit
    4 - Dragon
    5 - Snake
    6 - Horse
    7 - Goat
    8 - Monkey
    9 - Rooster
    10 - Dog
    11 - Pig
*/ 

let userInput = prompt("Insert your birth year:")

let birthYear = Number(userInput);

let zodiacRefNum = (birthYear - 4) % 12;


if(birthYear === 0 || userInput === null || Number.isNaN(birthYear) ){
   alert("Insert proper 4 digit year!")
}else if(zodiacRefNum === 0){
    alert("Your Chinese zodiac sign is Rat!")
}else if(zodiacRefNum === 1){
    alert("Your Chinese zodiac sign is Ox!")
}else if(zodiacRefNum === 2){
    alert("Your Chinese zodiac sign is Tiger!")
}else if(zodiacRefNum === 3){
    alert("Your Chinese zodiac sign is Rabbit!")
}else if(zodiacRefNum === 4){
    alert("Your Chinese zodiac sign is Dragon!")
}else if(zodiacRefNum === 5){
    alert("Your Chinese zodiac sign is Snake!")
}else if(zodiacRefNum === 6){
    alert("Your Chinese zodiac sign is Horse!")
}else if(zodiacRefNum === 7){
    alert("Your Chinese zodiac sign is Goat!")
}else if(zodiacRefNum === 8){
    alert("Your Chinese zodiac sign is Monkey!")
}else if(zodiacRefNum === 9){
    alert("Your Chinese zodiac sign is Rooster!")
}else if(zodiacRefNum === 10){
    alert("Your Chinese zodiac sign is Dog!")
}else if(zodiacRefNum === 11){
    alert("Your Chinese zodiac sign is Pig!")
}