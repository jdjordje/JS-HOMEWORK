/*Student constructor function
Create a constructor function for Student objects with:
Properties:
firstName
lastName
birthYear
academy
grades - array of numbers
Methods:
getAge() - returns age of student
getInfo() - returns "This is student firstName* lastName* from the academy academy*!"
getGradesAverage() - returns the average of the student grades
Create an array with 3 students*/

console.log(`test`);

class Student {
  constructor(firstName, lastName, birthYear, academy, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.academy = academy;
    this.grades = grades;
  }
  getAge() {
    let currYear = new Date().getFullYear();
    let age = currYear - this.birthYear;
    console.log(`The student is ${age}, years old`);
  }
}

let student = new Student("Pero", "Zdero", 1988, "SEDC", [1, 2, 3, 4]);
console.log(student);
