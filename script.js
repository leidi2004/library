const btnAdd = document.querySelector(".btn-add");
const hiddenForm = document.querySelector(".hidden-form");
const body = document.querySelector("body");
const gridItems = document.querySelectorAll (".grid-item");
const btnDelete = document.querySelectorAll(".btn-delete");
const btnClose = document.querySelector(".btn-close")

btnAdd.addEventListener("click", ()=>{
    body.classList.add("body-lostfocus");
    hiddenForm.classList.add("floating-form");
    gridItems.forEach(gridItems => {
        gridItems.classList.add("grid-item-lostfocus");
    });
    btnDelete.forEach(btnDelete => {
        btnDelete.classList.add("btn-delete-lostfocus");
    });
});

btnClose.addEventListener("click", ()=>{
    body.classList.remove("body-lostfocus");
    hiddenForm.classList.remove("floating-form");
    gridItems.forEach(gridItems => {
        gridItems.classList.remove("grid-item-lostfocus");
    });
    btnDelete.forEach(btnDelete => {
        btnDelete.classList.remove("btn-delete-lostfocus");
    });
});
