/*

 Create a reminder app
- There should be:
  - An input for entering the title
  - An input for entering priority
  - An input for color
  - A textarea for adding a description
  - A button for adding the reminder
  - A button for showing all reminders
- When the button for adding is clicked an object needs to be created with the properties from the inputs ( title, priority, color, and description )
- The object should then be added to an array of reminders
- When the button for showing all reminders is clicked it should show a table with title, priority, and description columns
- The title should be the color of the "color" property
- Don't forget to reset the inputs after adding a reminder
*/
const title = document.querySelector(`#title`);
const priority = document.querySelector(`#priority`);
const color = document.querySelector(`#color`);
const description = document.querySelector(`#description`);
const littlespan = document.querySelector(`.littlespan`);
const display = document.querySelector(`.display`);
const add = document.querySelector(`#add`);
const render = document.querySelector(`#showAll`);

class Reminder {
  constructor(title, priority, color, description) {
    this.title = title;
    this.priority = priority;
    this.color = color;
    this.description = description;
  }
}

const reminders = [];

function clearAll() {
  title.value = "";
  priority.value = "";
  color.value = "";
  description.value = "";
}

function renderTable() {
  let tableString = `
    <table>
    <thead>
    <tr>
        <th>Title</th>
        <th>Priority</th>  
        <th>Description</th>
      </tr>
      </thead>
  
      `;

  for (let i = 0; i < reminders.length; i++) {
    tableString += `<tr><td style="color:${reminders[i].color} ;">${reminders[i].title}</td>`;
    tableString += `<td>${reminders[i].priority}</td>`;
    tableString += `<td>${reminders[i].description}</td></tr>`;
  }
  display.innerHTML += `${tableString}</tbody></table>`;
}

function checkForEmptyInput(title, priority, color, description) {
  if (title.value === "" || priority.value === "" || color.value === "" || description.value === "") {
    return false;
  }
  return true;
}

add.addEventListener(`click`, function () {
  littlespan.innerText = "";
  display.innerHTML = "";

  const titleVal = title.value;
  const priorityVal = priority.value;
  const colorVal = color.value;
  const descriptionVal = description.value;

  if(!checkForEmptyInput(title, priority, color, description)){
    alert(`Please fill all inputs`)
    return;
}

  const reminderItem = new Reminder(titleVal, priorityVal, colorVal, descriptionVal);

  reminders.push(reminderItem);

  littlespan.innerText = `You have added a reminder`;

  clearAll();
});

render.addEventListener(`click`, function () {
  littlespan.innerText = "";
  display.innerHTML = "";

  renderTable();

  clearAll();
});
