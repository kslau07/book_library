"use strict";

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

class Book extends Reading {
  #author; // Make all data private
  #pages;
  #title;
  #bookId;

  static myLibrary = [];

  constructor(title, author, pages, read, bookcover) {
    super(read, bookcover);
    this.#title = title;
    this.#author = author;
    this.#pages = pages;
    this.setBookId();
  }

  get bookId() {
    return this.#bookId;
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

  setBookId() {
    const string = this.#author + this.#title // Use author + title to create a unique string / id
    this.#bookId = string.replace(/\s/g, '');
    // this.#bookId = btoa(string) // Use base64 encoding to make it look a bit better in the markup
  }
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false, "paperback");
Book.myLibrary.push(book1);

const book2 = new Book(
  "Fahrenheit 451",
  "Ray Bradbury",
  236,
  true,
  "hardcover",
);
Book.myLibrary.push(book2);

const book3 = new Book(
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  242,
  "true",
  "paperback",
);
Book.myLibrary.push(book3);

const configureRemoveButtons = function () {
  const removeButtons = document.getElementsByClassName("remove-button");
  for (const button of removeButtons) {
    button.addEventListener("click", () => {
      const bookId = button.getAttribute("data-bookid");
      const booksArray = Book.myLibrary
      for (let i = 0; i < booksArray.length; i++ ) {
        if (booksArray[i].bookId == bookId) {
          booksArray.splice(i, 1)
          showBooks();
          break;
        }
      }
      // for (const book of Book.myLibrary) {
      //   console.log(book.bookId == bookId)
      // }
      // console.log(bookId)
      // Book.myLibrary.splice(bookId, 1);
    });
  }
};

const configureButtons = function () {
  configureRemoveButtons();
};

class BookElement {
  static {
    this.prototype.table = document.getElementById("tbody");
  }

  constructor(book) {
    const tr = this.addRow();

    const bookInfo = ["title", "author", "pages", "read", "bookcover"];
    for (const item of bookInfo) {
      this.addData(tr, book[item]);
    }
    this.addButton(tr, "Remove", book);
    this.addButton(tr, "Show", book);
    this.addButton(tr, "Mark", book);
  }

  addRow() {
    const table = Object.getPrototypeOf(this).table;
    const tr = document.createElement("tr");
    table.appendChild(tr);
    return tr;
  }

  addData(tr, data) {
    const td = document.createElement("td");
    tr.appendChild(td);
    td.textContent = data;
  }

  addButton(tr, name, book) {
    const td = document.createElement("td");
    tr.appendChild(td);
    const btn = document.createElement("button");
    td.appendChild(btn);
    btn.textContent = name;
    btn.setAttribute(`data-bookid`, book.bookId);
    btn.className = `${name.toLowerCase()}-button`;
  }
}

const showBooks = function () {
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = "";

  for (const book of Book.myLibrary) {
    new BookElement(book);
  }

  configureButtons();
};

const configureAddBookBtn = (function () {})();

const configureForm = (function () {
  const addBookDialog = document.getElementById("add-book-dialog");
  const addBookBtn = document.getElementById("add-book-btn");

  addBookBtn.addEventListener("click", () => {
    addBookDialog.showModal(); // Builtin method that reveals modal
  });

  const form = document.getElementById("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").value == "on" ? true : false;
    const bookcover = document.getElementById("bookcover").value;

    const newBook = new Book(title, author, pages, read, bookcover);
    Book.myLibrary.push(newBook);
    showBooks();
  });

  const formCloseBtn = document.getElementById("form-close-btn");
  formCloseBtn.addEventListener("click", () => addBookDialog.close());
})();

showBooks();

