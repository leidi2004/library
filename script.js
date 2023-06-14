const btnAdd = document.querySelector(".btn-add");
const hiddenForm = document.querySelector(".hidden-form");
const body = document.querySelector("body");
const btnClose = document.querySelector(".btn-close");
const btnAddBook = document.querySelector(".btn-add-book");
const checkBookStatus = document.querySelector(".book-status");
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
let bookStatus;
btnAddBook.addEventListener("click", (event) => {
    event.preventDefault();
    let bookName = document.querySelector(".book-name").value;
    let bookAuthor = document.querySelector(".book-author").value;
    let bookNumPages = document.querySelector(".book-num-pages").value;
    let inputID = document.querySelector(".book-id").value = pos;

    if (checkBookStatus.checked) {
        bookStatus = "Read";
    } else if (checkBookStatus.checked === false) {
        bookStatus = "Not Read"
    }

    const newBook = new Book(bookName, bookAuthor, bookNumPages, bookStatus, inputID);

    arrayBooks.push(newBook);
    clearForm();
    removeForm();
    showBooks();
    pos++;
});


btnAdd.addEventListener("click", showForm);

btnClose.addEventListener("click", removeForm);



function removeForm() {
    const gridItems = document.querySelectorAll(".grid-item");
    const btnDelete = document.querySelectorAll(".btn-delete");
    const btnToggleStatus = document.querySelectorAll(".btn-toggle");

    body.classList.remove("body-lostfocus");
    hiddenForm.classList.remove("floating-form");

    gridItems.forEach(function (gridItem) {
        gridItem.classList.remove("grid-item-lostfocus");
    });

    btnDelete.forEach(function (btn) {
        btn.classList.remove("btn-delete-lostfocus");
    });

    btnToggleStatus.forEach(function (btn) {
        btn.classList.remove("btn-toggle-lostfocus");
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

    let btnToggleStatus = document.createElement("button");
    btnToggleStatus.classList.add("btn-toggle");
    btnToggleStatus.innerHTML = arrayBooks[newBookPos].bookStatus;
    grid.appendChild(btnToggleStatus);

    let btnDelete = document.createElement("button");
    btnDelete.classList.add("btn-delete");
    btnDelete.innerHTML = "Delete";
    grid.appendChild(btnDelete);

    btnDelete.addEventListener("click", (event) => {
        const index = event.target.getAttribute('data-index');
        arrayBooks.splice(index, 1);
        console.log(index);
        console.log(arrayBooks);
        grid.remove();
    });

    btnToggleStatus.setAttribute('data-index', newBookPos);
    btnToggleStatus.addEventListener("click", (event) => {
        const index = event.target.getAttribute('data-index');
        const book = arrayBooks[index];

        if (book.bookStatus === "Read") {
            book.bookStatus = "Not Read";
            btnToggleStatus.innerHTML = "Not Read";
            console.log(arrayBooks);
        } else if (book.bookStatus === "Not Read") {
            book.bookStatus = "Read";
            btnToggleStatus.innerHTML = "Read";
            console.log(arrayBooks);
        }
    });
}

function showForm() {
    const gridItems = document.querySelectorAll(".grid-item");
    const btnDelete = document.querySelectorAll(".btn-delete");
    const btnToggleStatus = document.querySelectorAll(".btn-toggle");

    body.classList.add("body-lostfocus");
    hiddenForm.classList.add("floating-form");

    gridItems.forEach(function (gridItem) {
        gridItem.classList.add("grid-item-lostfocus");
    });

    btnDelete.forEach(function (btn) {
        btn.classList.add("btn-delete-lostfocus");
    });

    btnToggleStatus.forEach(function (btn) {
        btn.classList.add("btn-toggle-lostfocus");
    });
}