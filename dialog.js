const addBookDialog = document.getElementById("add-book-dialog");
const addButton = document.getElementById("add-btn");
const closeButton = document.getElementById("close-btn");
const form = document.getElementById("form");

addButton.addEventListener("click", () => {
  addBookDialog.showModal();
});

closeButton.addEventListener("click", () => {
  addBookDialog.close();
});

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form from trying to submit to a server
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").value == "on" ? true : false;

  if (title == "" || author == "" || pages == "" || read == "")
    return alert("Some items were left blank.");

  myLibrary.push(new Book(title, author, pages, read));
  form.reset();
  addBookDialog.close();
  showBooks();
});
