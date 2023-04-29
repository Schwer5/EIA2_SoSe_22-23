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
    async function handleLoad() {
        let addtask = document.querySelector('#addtask');
        addtask.addEventListener('click', logaddtask);
        loaddata();
    }
    async function logaddtask() {
        const inputTodo = document.querySelector('#inputTodo');
        const inputValue = inputTodo.value;
        const inputComment = document.querySelector('#inputComment');
        const commentValue = inputComment.value;
        const selectName = document.querySelector('#selectname');
        const nameValue = selectName.value;
        const datetime = document.querySelector('#datetime');
        const dateValue = datetime.value;
        let newid = 0;
        let idExists = true; //hier wird idExists auf false gesetzt, um zu überprüfen, 
        while (idExists) { //ob die aktuelle Nummer (newid) einzigartig ist. 
            newid = newid + 1; //Wir gehen zunächst davon aus, dass sie einzigartig ist, 
            idExists = false; //indem wir idExists auf false setzen. Dann überprüfen wir das, 
            for (let docId in data) { //indem wir alle vorhandenen IDs in data durchgehen. Wenn wir eine gleiche ID finden, 
                let item = data[docId]; //setzen wir idExists auf true, um zu zeigen, dass die aktuelle Nummer doch nicht einzigartig ist.
                if (item.id == newid) { // Dann suchen wir weiter nach einer einzigartigen Nummer.
                    idExists = true;
                }
            }
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
        await fetch(`https://webuser.hs-furtwangen.de/~schwerpi/Database/?command=insert&collection=TaskList&data=${JSON.stringify(newItem)}`);
        inputTodo.value = '';
        inputComment.value = '';
        selectName.value = '';
        datetime.value = '';
    }
    async function createtask(item) {
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
                deleteDataFromServer(item.id);
            });
        }
        let container = document.querySelector('#task-container');
        container && container.appendChild(newDiv);
    }
    async function loaddata() {
        const response = await fetch("https://webuser.hs-furtwangen.de/~schwerpi/Database/?command=find&collection=TaskList");
        const dataJSON = await response.json();
        data = dataJSON.data;
        for (let docId in data) {
            let item = data[docId];
            createtask(item);
        }
    }
    function deletetaskdom(event) {
        const target = event.target;
        const divToDelete = target.closest('div');
        divToDelete && divToDelete.remove();
    }
    async function deleteDataFromServer(id) {
        let dataBaseIndex = "";
        for (let docId in data) { //wir gehen durch jede docId(z.B.644cdd7d5caa0) in data durch 
            let item = data[docId]; // wir holen uns das item für eine docId 
            if (item.id == id) { // wir schauen ob das item mit docId die gesuchte item.id(man geht in ein item und vergleicht dort die "id") hat
                dataBaseIndex = docId; // wenn wir die übereinstimmende id gefunden haben, speichern wir diese in dataBaseIndex
            }
            const deleteUrl = `https://webuser.hs-furtwangen.de/~schwerpi/Database/?command=delete&collection=TaskList&id=${dataBaseIndex}`;
            await fetch(deleteUrl);
        }
    }
})(A05_Aufgabenliste_Formular || (A05_Aufgabenliste_Formular = {}));
//# sourceMappingURL=A06_Aufgabenliste_Formular.js.map