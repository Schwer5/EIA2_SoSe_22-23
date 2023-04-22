"use strict";
var A05_Aufgabenliste_Formular;
(function (A05_Aufgabenliste_Formular) {
    /*
     Aufgabe: <Aufgabe 05 Aufgabenliste_Formular>
     Name:<Pia Schwer>
     Matrikel: <272266>
     Datum: <15.04.23>
     Zusammenarbeit mit Theresa Hauser, Marie Eckl
     Quellen: Stack Overflow, Developer Mozilla,Github Jirka, Vorherige Aufgabe(n) aus EIA1
     */
    window.addEventListener('load', handleLoad);
    let data = [];
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
        while (-1 != data.findIndex(function (item) { return item.id === newid; })) {
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
        let newDiv = document.createElement('div');
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
        let deleteButton = newDiv.querySelector('#deletetask');
        if (deleteButton) {
            deleteButton.addEventListener('click', function (event) {
                deletetaskdom(event);
                deletetask(item.id);
            });
        }
        let container = document.querySelector('#task-container');
        container && container.appendChild(newDiv);
    }
    async function loaddata() {
        let response = await fetch('data.json');
        let task = await response.text();
        let dataJSON = JSON.parse(task);
        data = dataJSON.data;
        data.forEach(function (item) {
            createtask(item);
        });
    }
    function deletetask(id) {
        let index = data.findIndex(function (item) { return item.id === id; });
        data.splice(index, 1);
    }
    function deletetaskdom(event) {
        const target = event.target;
        const divToDelete = target.closest('div');
        divToDelete && divToDelete.remove();
    }
})(A05_Aufgabenliste_Formular || (A05_Aufgabenliste_Formular = {}));
//# sourceMappingURL=A05_Aufgabenliste_Formular.js.map