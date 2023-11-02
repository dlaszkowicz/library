const newBookBtn = document.querySelector(".new-book-btn");
const newBookForm = document.querySelector(".new-book-form");
const formContainer = document.querySelector(".form-container");
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // do stuff here
}
function openForm() {
  formContainer.style.display = "flex";
}
