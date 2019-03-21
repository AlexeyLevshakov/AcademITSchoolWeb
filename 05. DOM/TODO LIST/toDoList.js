"use strict";

document.addEventListener("DOMContentLoaded", function () {
    var newTextField = document.querySelector(".new-text");
    var list = document.querySelector(".list");
    var createNoteButton = document.querySelector(".create-note-button");
    createNoteButton.addEventListener("click", function () {
        var noteText = newTextField.value;
        if (noteText === "") {
            return;
        }

        var li = document.createElement("li");
        li.innerHTML = "<span></span>\
                        <button type='button'>Исправить</button>\
                        <button type='button'>Удалить</button>";
        li.children[0].innerText = noteText;
        list.appendChild(li);

        newTextField.value = "";

        li.children[1].addEventListener("click", function () {
            var savedNoteText = li.children[0].innerText;
            li.children[0].innerHTML = "<input type='text'>\
                             <button type='button'>Сохранить</button>\
                             <button type='button'>Отменить</button>";
            li.children[0].children[0].value = savedNoteText;
            li.children[1].style.display = "none";

            li.children[0].children[2].addEventListener("click", function () {
                li.children[0].innerText = noteText;
                li.children[1].style.display = "inline";
            });

            li.children[0].children[1].addEventListener("click", function () {
                li.children[0].innerText = li.children[0].children[0].value;
                li.children[1].style.display = "inline";
            });
        });

        li.children[2].addEventListener("click", function () {
            list.removeChild(li);
        });
    });
});