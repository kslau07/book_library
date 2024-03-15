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
  #medium;

  constructor(read, medium) {
    this.#read = read;
    this.#medium = medium;
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

  get medium() {
    return this.#medium;
  }
}

class Book extends Reading  {
  #author; // Make all data private
  #pages;
  #title;

  static myLibrary = [];

  constructor(title, author, pages, read, medium) {
    super(read, medium);
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

const showBooks = function() {
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = "";
}

const tbody = document.getElementById("tbody")
const tr = document.createElement("tr")
tbody.appendChild(tr)
const td = document.createElement("td")
tr.appendChild(td)
td.textContent = "foo"

// On page load, invoke showBooks()
// User clicks add book
// A modal dialog appears
// User fills out book info
// User clicks "Add Book" button
// Invoke showBooks()
