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
    //returning age
    return age;
  }

  getInfo(){
    console.log(`This is ${this.firstName} ${this.lastName} from the ${this.academy} academy!`)
    //returning info
    return `This is ${this.firstName} ${this.lastName} from the ${this.academy} academy!`;
  }

  getGradesAverage(){
    
    let gradeSum = 0;
    for(let grade of this.grades){
      gradeSum += grade;
    }

    let gradeAverage = gradeSum / this.grades.length

   console.log(`The grade average of the student ${this.firstName} ${this.lastName} is ${gradeAverage}.`);
   //returning average
   return gradeAverage;
  }
}

const arrayOfStudents =[];
let studentOne = new Student("Pero", "Zdero", 1988, "SEDC", [1, 2, 3, 4]);
let studentTwo = new Student("James", "Gandolfini", 1961, "Satriales", [2,2,2,3] );
let studentThree = new Student("Stewie", "Griffin", 1999, "Kindergarden", [5,5,5,5]);

arrayOfStudents.push(studentOne, studentTwo, studentThree);

