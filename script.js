/*
 * TODO: Everytime a user adds a book, it should immediately write to a json file.
 * */

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  // this.info = function () {
  //   const readStatus = read ? "already read" : "not read yet";
  //   return `${this.title} by ${this.author}, ${this.pages}, ${readStatus}`;
  // };
}

var foo = 5;

function addBookToLibrary() {
  const title = prompt("What's the book's title?");
  const author = prompt("Who is the author?");
  const pages = prompt("How many pages does it have?");
  const read = prompt("Have you already read it?");

  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}
addBookToLibrary();

myLibrary.push(new Book("The Hobbit", "J.R.R. Tolkien", "295 pages", false));
myLibrary.push(
  new Book("The Great Gatsby", "F. Scott Fitzgerald", "242 pages", false),
);

const headerNames = ["title", "author", "pages", "read"];
const tbody = document.getElementById("tbody");

for (const book of myLibrary) {
  const tr = document.createElement("tr");

  for (let headerName of headerNames) {
    tbody.appendChild(tr);
    const td = document.createElement("td");
    td.textContent = book[headerName];
    tr.appendChild(td);
  }
}
