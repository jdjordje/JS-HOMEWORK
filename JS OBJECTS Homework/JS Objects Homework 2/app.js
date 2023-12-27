/*

HOMEWORK Part 2

Write a JavaScript program to display the reading status of some book. The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g.

    Already read 'The Robots of dawn' by Isaac Asimov. (if true)
    You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).

Bonus: enter the values from prompt() or read them from HTML

*/
const bookName = document.querySelector("#bookName");
const author = document.querySelector("#author");
const check = document.querySelector("#check");
const btn = document.querySelector("#btn");
const list = document.querySelector(`.list`);

class Book {
  constructor(bookName, author) {
    this.bookName = bookName;
    this.author = author;
    this.readStat = false;
  }

  readBook() {
    this.readStat = true;
  }

  checkIfBookRead() {
    if (this.readStat === true) {
      console.log(`You have read the book`);
    } else {
      console.log(`Please be kind and finish the book.`);
    }
  }
}

btn.addEventListener(`click`, function () {
  if (bookName.value === "" || author.value === "") {
    return alert(`Please fill book name and author name`);
  } else {
    let book = new Book(bookName.value, author.value);
    bookName.value = "";
    author.value = "";
    if (check.checked === true) {
      book.readBook();
      list.innerHTML += `<li>${book.bookName} by ${book.author}has been read.</li>`;
    } else {
      list.innerHTML += `<li>${book.bookName} by ${book.author} has not been finished.</li>`;
    }
  }
  bookName.value = "";
  author.value = "";
  check.checked = false;
});
