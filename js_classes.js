// Class features we may add:
// public/private fields & methods
// static fields & methods
// static/instance accessors
// super()

const myLibrary = [];

class Book {
  // Make all data private
  #title;
  #author;
  #pages;
  #read;

  constructor(title, author, pages, read) {
    this.#title = title;
    this.#author = author;
    this.#pages = pages;
    this.#read = read;
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

  get read() {
    return this.#read;
  }

  set read(value) {
    this.#read = value;

  }
  toggleRead() {
    this.#read = this.#read == true ? false : true;
  }
}

const book = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false)
book.readStatus = true;
console.log(book.title)
console.log(book.author)
console.log(book.pages)
book.toggleRead()
book.toggleRead()
console.log(book.read)

