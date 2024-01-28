/* TODO: Use an html table to display our information (practice html tables)
 * TODO: Everytime a user adds a book, it should immediately write to a json file.
 * */

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    const readStatus = read ? "already read" : "not read yet";
    return `${this.title} by ${this.author}, ${this.pages}, ${readStatus}`;
  };
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295 pages", false);
const theGreatGatsby = new Book(
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  "242 pages",
  false,
);

addBookToLibrary(theHobbit);
addBookToLibrary(theGreatGatsby);

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
