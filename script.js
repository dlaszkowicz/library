const newBookBtn = document.querySelector(".new-book-btn");
const newBookForm = document.querySelector(".new-book-form");
const formContainer = document.querySelector(".form-container");
const booksGrid = document.querySelector(".books-grid");
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
const newBook = new Book();
function addBookToLibrary(event) {
  event.preventDefault();
  newBook.title = newBookForm.title.value;
  newBook.author = newBookForm.author.value;
  newBook.pages = newBookForm.pages.value;
  newBook.read = newBookForm.read.checked;

  const card = document.createElement("div");
  card.setAttribute("class", "card");

  const cardTitle = document.createElement("p");
  cardTitle.textContent = `"${newBook.title}"`;
  card.appendChild(cardTitle);

  const cardAuthor = document.createElement("p");
  cardAuthor.textContent = newBook.author;
  card.appendChild(cardAuthor);

  const cardPages = document.createElement("p");
  cardPages.textContent = newBook.pages;
  card.appendChild(cardPages);

  const readButton = document.createElement("button");
  if (newBook.read === true) {
    readButton.textContent = "Read";
    readButton.style.backgroundColor = "lightgreen";
  } else if (newBook.read === false) {
    readButton.textContent = "Not read";
    readButton.style.backgroundColor = "#ff8080";
  }
  card.appendChild(readButton);

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  card.appendChild(removeButton);
  removeButton.setAttribute("id", "remove");
  removeButton.addEventListener("click", function () {
    card.remove();
  });

  booksGrid.appendChild(card);

  formContainer.style.display = "none";
  newBookForm.reset();
}

function openForm() {
  formContainer.style.display = "flex";
}
document
  .querySelector(".new-book-form")
  .addEventListener("submit", addBookToLibrary);
