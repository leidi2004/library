const btnAdd = document.querySelector(".btn-add");
const hiddenForm = document.querySelector(".hidden-form");
const body = document.querySelector("body");
const gridItems = document.querySelectorAll(".grid-item");
const btnDelete = document.querySelectorAll(".btn-delete");
const btnClose = document.querySelector(".btn-close");
const btnAddBook = document.querySelector(".btn-add-book");
//const bookStatus = document.querySelector(".book-status").value;
const bookStatus = "read";
const arrayBooks = [];


function Book(bookName, authorName, numPages, bookStatus, bookID) {
    this.bookName = bookName;
    this.authorName = authorName;
    this.numPages = numPages;
    this.bookStatus = bookStatus;
    this.bookID = bookID;
}

// This variable stores the position of each book in the array. It is used when the user triggers the delete action. The position is saved in a hidden input field in the HTML
let pos = 0;

btnAddBook.addEventListener("click", (event) => {
    event.preventDefault();
    let bookName = document.querySelector(".book-name").value;
    let bookAuthor = document.querySelector(".book-author").value;
    let bookNumPages = document.querySelector(".book-num-pages").value;
    const newBook = new Book(bookName, bookAuthor, bookNumPages, bookStatus, pos);

    console.log("added");
    console.log(arrayBooks);
    arrayBooks.push(newBook);
    pos++;
    clearForm();
    removeForm();
    showBooks();
});


btnAdd.addEventListener("click", showForm);

btnClose.addEventListener("click", removeForm);

function showForm() {
    body.classList.add("body-lostfocus");
    hiddenForm.classList.add("floating-form");
    gridItems.forEach(gridItems => {
        gridItems.classList.add("grid-item-lostfocus");
    });
    btnDelete.forEach(btnDelete => {
        btnDelete.classList.add("btn-delete-lostfocus");
    });
}

function removeForm() {
    body.classList.remove("body-lostfocus");
    hiddenForm.classList.remove("floating-form");
    gridItems.forEach(gridItems => {
        gridItems.classList.remove("grid-item-lostfocus");
    });

    btnDelete.forEach(btnDelete => {
        btnDelete.classList.remove("btn-delete-lostfocus");
    });
}

function clearForm() {
    document.querySelector(".book-name").value = "";
    document.querySelector(".book-author").value = "";
    document.querySelector(".book-num-pages").value = "";
}

function showBooks() {
    newBookPos = arrayBooks.length - 1;
    let grid = document.createElement("div");
    grid.classList.add("grid-item");
    document.querySelector(".grid-container").appendChild(grid);

    let pTitle = document.createElement("p");
    pTitle.classList.add("title");
    grid.appendChild(pTitle);
    pTitle.innerHTML = arrayBooks[newBookPos].bookName;

    let pAuthor = document.createElement("p");
    pAuthor.classList.add("author");
    pAuthor.innerHTML = arrayBooks[newBookPos].authorName;
    grid.appendChild(pAuthor);

    let pNumPages = document.createElement("p");
    pNumPages.innerHTML = arrayBooks[newBookPos].numPages;
    grid.appendChild(pNumPages);

    let pStatus = document.createElement("p");
    pStatus.classList.add("status");
    pStatus.innerHTML = arrayBooks[newBookPos].bookStatus;
    grid.appendChild(pStatus);

    let btnDelete = document.createElement("button");
    btnDelete.classList.add("btn-delete");
    btnDelete.innerHTML = "Delete";
    grid.appendChild(btnDelete);
}




