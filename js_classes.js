'use strict'

// TODO: Add several JavaScript class features:
// public/private fields
// public/private methods
// static fields & methods
// ✅ static/instance accessors
// ✅ super()
// ✅ extends

class Reading {
  #read; // Make all data private
  #bookcover;

  constructor(read, bookcover) {
    this.#read = read;
    this.#bookcover = bookcover;
  }

  get read() {
    return this.#read;
  }
  
  set read(value) {
    this.#read = value;
  }

  toggleRead() {
    this.#read = this.#read == true ? false : true;
  }

  get bookcover() {
    return this.#bookcover;
  }
}

class Book extends Reading  {
  #author; // Make all data private
  #pages;
  #title;

  static myLibrary = [];

  constructor(title, author, pages, read, bookcover) {
    super(read, bookcover);
    this.#title = title;
    this.#author = author;
    this.#pages = pages;
  }

  get title() {
    return this.#title;
  }

  get author() {
    return this.#author;
  }

  get pages() {
    return this.#pages;
  }
}

const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false, 'paperback');
const book2 = new Book('Fahrenheit 451', 'Ray Bradbury', 236, true, 'hardcover');
const book3 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 242, 'paperback');
Book.myLibrary.push(book1, book2, book3)

const button = (function() {
  // We can use an IIFE to populate some DOM elements
})()

// TODO: Get this constructor function working. THEN: convert it to a class
// Create a button for each book to "remove" book
function appendChildElement(type, content) {
  this.tbody = document.getElementById("tbody");
  // this.el = document.createElement(type)
  // this.el.innerText = content
  // document.body.append(el)
  // this.el.addEventListener('click', () => {
    // console.log("super element clicked")
  // })
}
// Above: We should create something like `class TableItem`

class BookElement {
  static {
    this.prototype.table = document.getElementById("tbody")
  }

  constructor(book) {
    const tr = this.addRow()
    const td = document.createElement("td")
    tr.appendChild(td)
    td.textContent = book.title
  }

  addRow() {
    const table = Object.getPrototypeOf(this).table
    const tr = document.createElement("tr")
    table.appendChild(tr)
    return tr
  }
}

const showBooks = function() {
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = "";

  for (const book of Book.myLibrary) {
    new BookElement(book)
  }
}

// const tbody = document.getElementById("tbody")
// const tr = document.createElement("tr")
// tbody.appendChild(tr)
// const td = document.createElement("td")
// tr.appendChild(td)
// td.textContent = "foo"

const configureAddBookBtn = (function(){
  const addBookBtn = document.getElementById("add-book-btn")
  addBookBtn.addEventListener("click", () => {
    const addBookDialog = document.getElementById("add-book-dialog");
    addBookDialog.showModal(); // Builtin method that reveals modal
  })
})()

const configureForm = (function(){
  const form = document.getElementById("form")
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").value;
    const bookcover = document.getElementById("bookcover").value;
  }) 
})()

showBooks()

// On page load, invoke showBooks()
// User clicks add book
// A modal dialog appears
// User fills out book info
// User clicks "Add Book" button
// Invoke showBooks()

// From lesson:
// function SuperElement(type, content) {
//   this.el = document.createElement(type)
//   this.el.innerText = content
//   document.body.append(el)
//   this.el.addEventListener('click', () => {
//     console.log("super element clicked")
//   })
