const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.showInfo = function () {
  const status = this.read ? "Already read." : "Not read yet.";
  const bookInfo = document.getElementById("book-info");
  const showInfoDialog = document.getElementById("show-info-dialog");
  bookInfo.textContent = `${this.title} by ${this.author}, ${this.pages} pages. ${status}`;
  showInfoDialog.showModal();

  const closeButton = document.getElementById("show-info-close-btn");
  closeButton.addEventListener("click", () => {
    showInfoDialog.close();
  });
};

Book.prototype.markRead = function () {
  this.read = this.read == true ? false : true;
  showBooks();
};

myLibrary.push(new Book("The Hobbit", "J.R.R. Tolkien", "295", false));
myLibrary.push(new Book("Fahrenheit 451", "Ray Bradbury", "236", true));
myLibrary.push(
  new Book("The Great Gatsby", "F. Scott Fitzgerald", "242", true),
);

function configureRemoveButtons() {
  const removeButtons = document.getElementsByClassName("remove-btn");
  for (let button of removeButtons) {
    button.addEventListener("click", () => {
      const index = button.getAttribute("data-book-index");
      myLibrary.splice(index, 1); // Works
      showBooks();
    });
  }
}

function configureShowInfoButtons() {
  const showInfoButtons = document.getElementsByClassName("show-info-btn");
  for (let button of showInfoButtons) {
    button.addEventListener("click", () => {
      const index = button.getAttribute("data-book-index");
      myLibrary[index].showInfo();
    });
  }
}

function configureReadButtons() {
  const readButtons = document.getElementsByClassName("read-btn");
  for (let button of readButtons) {
    button.addEventListener("click", () => {
      const index = button.getAttribute("data-book-index");
      myLibrary[index].markRead();
    });
  }
}

const showBooks = function () {
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = ""; // Reset tbody for each call
  const headerNames = ["title", "author", "pages", "read"];

  let index = 0;

  for (const book of myLibrary) {
    const tr = document.createElement("tr");
    tbody.appendChild(tr);
    for (let headerName of headerNames) {
      const td = document.createElement("td");
      td.textContent = book[headerName];
      if (headerName == "read" && book[headerName] == true) {
        td.setAttribute("class", "read");
      } else if (headerName == "read" && book[headerName] == false) {
        td.setAttribute("class", "unread");
      }
      tr.appendChild(td);
    }

    // Create remove button
    const removeTd = document.createElement("td");
    tr.appendChild(removeTd);
    const removeButton = document.createElement("button");
    removeButton.dataset.bookIndex = index;
    removeButton.setAttribute("class", "remove-btn");
    removeButton.type = "button";
    removeButton.innerHTML = "Remove";
    removeTd.appendChild(removeButton);

    // Create info button
    const showInfoTd = document.createElement("td");
    tr.appendChild(showInfoTd);
    const showInfoBtn = document.createElement("button");
    showInfoBtn.setAttribute("class", "show-info-btn");
    showInfoBtn.setAttribute("data-book-index", index);
    showInfoBtn.innerHTML = "View formatted info ";
    showInfoTd.appendChild(showInfoBtn);

    // Create mark-read button
    const readTd = document.createElement("td");
    tr.appendChild(readTd);
    const readBtn = document.createElement("button");
    readBtn.setAttribute("class", "read-btn");
    readBtn.setAttribute("data-book-index", index);
    readBtn.innerHTML = 'Mark as "read"';
    readTd.appendChild(readBtn);

    index++;
  }

  configureRemoveButtons();
  configureShowInfoButtons();
  configureReadButtons();
};

showBooks();
