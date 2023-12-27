/*

HOMEWORK Part 1

Create OBJECT animal with 2 properties and 1 method:

    name
    kind
    speak (method)

this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”
Bonus: enter the values from prompt or from HTML inputs 
*/
const animalName = document.querySelector("#animalName");
const kindOfAnimal = document.querySelector("#kindOfAnimal");
const punchLine = document.querySelector("#punchLine");
const display = document.querySelector("#display");
const btn = document.querySelector("#btn");

function Animal(animalName, kind, punchLine) {
  (this.animalName = animalName),
    (this.kind = kind),
    (this.punchLine = punchLine),
    (this.speak = function () {
      console.log(`The ${this.kind} named ${animalName} says:${this.punchLine}`);
    });
}

btn.addEventListener(`click`, function () {
  display.innerHTML = "";
  const newAnimal = new Animal(animalName.value, kindOfAnimal.value, punchLine.value);
  newAnimal.speak();
  display.innerHTML = `<p>The ${animalName.value} named ${kindOfAnimal.value} says:${punchLine.value}</p>`;
  animalName.value = "";
  kindOfAnimal.value = "";
  punchLine.value = "";
});
