//Seleccionando elementos del DOM
const btnAdd = document.querySelector(".btn-add");
const hiddenForm = document.querySelector(".hidden-form");
const body = document.querySelector("body");
const btnClose = document.querySelector(".btn-close");
const btnAddBook = document.querySelector(".btn-add-book");
const checkBookStatus = document.querySelector(".book-status");
const arrayBooks = [];

//posicion del objeto en el array
let pos = 0;
//guardar el estado obtenido en el checkbox
let bookStatus;


function Book(bookName, authorName, numPages, bookStatus, bookID) {
    this.bookName = bookName;
    this.authorName = authorName;
    this.numPages = numPages;
    this.bookStatus = bookStatus;
    this.bookID = bookID;
}

//Manejo de eventos
btnAddBook.addEventListener("click", addBook);
btnAdd.addEventListener("click", showForm);
btnClose.addEventListener("click", removeForm);

/**
 * Funciones principales 
*/

//crear objeto libro con los valores del formulario
function addBook(event){
    //Prevenir que se envie el formulario por defecto
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
    createGrid();
    pos++;
}

//crear grid para el ultimo elemento que fue agregado en el array
function createGrid() {
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

    //configurar el event listener de eliminar con el indice
    //del objeto en el grid clicado
    btnDelete.addEventListener("click", (event) => {
        const index = event.target.getAttribute('data-index');
        arrayBooks.splice(index, 1);
        console.log(index);
        console.log(arrayBooks);
        grid.remove();
    });

    //Asignar a data index del boton eliminar de cada grid el
    //la posicion en el arrade cada objeto creado
    btnToggleStatus.setAttribute('data-index', newBookPos);
    btnToggleStatus.addEventListener("click", (event) => {
        const index = event.target.getAttribute('data-index');
        const book = arrayBooks[index];

        //Toggle status y contenido del boton
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

//Remover clases agregadas al cerrar el formulario
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

//Para mostrar campos de formulario en estado original
function clearForm() {
    document.querySelector(".book-name").value = "";
    document.querySelector(".book-author").value = "";
    document.querySelector(".book-num-pages").value = "";
    const checkboxStatus = document.querySelector(".book-status");
    checkboxStatus.checked = false;
}