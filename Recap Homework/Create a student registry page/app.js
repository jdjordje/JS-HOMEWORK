/*

- Create an HTML page with student registry form with
  - First Name
  - Last Name
  - Age
  - Email
- Create a student generator class
- When the form is submitted, the input values should be compiled into a new object of type Student
- This student should be added to a list (array) called "students"
- After submitting the form the students array should be printed in the console
- The input fields should be cleared

*/

const firstName = document.querySelector(`#firstName`);
const lastName = document.querySelector(`#lastName`);
const age = document.querySelector(`#age`);
const email = document.querySelector(`#email`);
const button = document.querySelector(`#btn`);

//console.log(firstName, lastName, age ,email, button);

class Student{
    constructor(firstName, lastName, age, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
}

const students = [];

function clearValues(){
    firstName.value = "";
    lastName.value = "";
    age.value = "";
    email.value = "";
}


function checkForEmptyInput(nameValue,lastnameValue,ageValue,emailValue){
    if(nameValue === "" ||
     lastnameValue === "" ||
      ageValue === "" ||
       emailValue === ""){
        return false;
    }return true;
}


button.addEventListener(`click`,function(){
    
    const nameValue = firstName.value;
    const lastnameValue = lastName.value;
    const ageValue = age.value;
    const emailValue = email.value;


    if(!checkForEmptyInput(nameValue, lastnameValue,ageValue,emailValue)){
        alert(`Please fill all inputs`)
        return;
    }
    

    const newStudent = new Student(
        nameValue,
        lastnameValue,
        ageValue,
        emailValue
    );

  
    students.push(newStudent);

    console.log(students);

    clearValues();

})