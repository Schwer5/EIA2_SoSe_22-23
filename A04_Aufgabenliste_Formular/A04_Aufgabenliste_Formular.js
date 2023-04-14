"use strict";
var A04_Aufgabenliste_Formular;
(function (A04_Aufgabenliste_Formular) {
    let data = [
        { id: 1, title: "Spülmaschine ausräumen", comment: "Klarspüler auffüllen", name: "Selina", date: "16.04.23, 12:30", status: true },
        { id: 2, title: "Keller aufräumen", comment: "Mausefalle stellen", name: "Lea", date: "16.04.23, 19:30", status: true },
        { id: 3, title: "Flur fegen", comment: "jeden Stock", name: "Hanna", date: "16.04.23, 12:30", status: true },
        { id: 4, title: "Keller aufräumen", comment: "Mausefalle stellen", name: "Selina", date: "16.04.23, 19:30", status: true },
        { id: 5, title: "Müll rausbringen", comment: "Biomüll auf den Kompost", name: "Lea", date: "13.04.23, 12:30", status: true },
        { id: 6, title: "Kblabla", comment: "blablabla", name: "Hanna", date: "13.04.23, 19:30", status: true },
    ];
    window.addEventListener('load', handleLoad);
    function handleLoad() {
        let addtask = document.querySelector('#addtask');
        addtask.addEventListener('click', logaddtask);
        console.log(data);
        loaddata();
    }
    function logaddtask() {
        const inputTodo = document.querySelector('#inputTodo');
        const inputValue = inputTodo.value;
        const inputComment = document.querySelector('#inputComment');
        const commentValue = inputComment.value;
        const selectName = document.querySelector('#selectname');
        const nameValue = selectName.value;
        const datetime = document.querySelector('#datetime');
        const dateValue = datetime.value;
        let newid = 1;
        while (-1 != data.findIndex(item => item.id === newid)) {
            newid = newid + 1;
        }
        const newItem = {
            id: newid,
            title: inputValue,
            comment: commentValue,
            name: nameValue,
            date: dateValue,
            status: false,
        };
        data.push(newItem);
        createtask(newItem);
        inputTodo.value = '';
        inputComment.value = '';
        selectName.value = '';
        datetime.value = '';
    }
    function createtask(item) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('inputtask');
        newDiv.innerHTML = `
            <input type="radio" id="edit" name="edit" value="HTML">
            <label for="edit">In Bearbeitung</label><br>
            <input type="text" id="inputTodo" placeholder="${item.title}">
            <button id="deletetask"><i class="fas fa-trash"></i></button>
            <input type="text" id="inputComment" placeholder="${item.comment}">
            <select name="Name" id="selectname">
                <option value="" selected>${item.name}</option>
            </select>
            <input type="datetime-local" name="date" id="datetime" placeholder="${item.date}">
        `;
        const deleteButton = newDiv.querySelector('#deletetask');
        if (deleteButton) {
            deleteButton.addEventListener('click', event => {
                deletetaskdom(event);
                deletetask(item.id);
            });
        }
        const container = document.querySelector('#task-container');
        container?.appendChild(newDiv);
    }
    function loaddata() {
        data.forEach(function (item) {
            createtask(item);
        });
    }
    function deletetask(id) {
        const index = data.findIndex(item => item.id === id);
        data.splice(index, 1);
    }
    function deletetaskdom(event) {
        const target = event.target;
        const divToDelete = target.closest('div');
        divToDelete?.remove();
    }
})(A04_Aufgabenliste_Formular || (A04_Aufgabenliste_Formular = {}));
//# sourceMappingURL=A04_Aufgabenliste_Formular.js.map