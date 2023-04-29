namespace A05_Aufgabenliste_Formular {
    /*
     Aufgabe: <Aufgabe 05 Aufgabenliste_Formular>
     Name:<Pia Schwer>
     Matrikel: <272266>
     Datum: <15.04.23>
     Zusammenarbeit mit Theresa Hauser, Marie Eckl
     Quellen: Stack Overflow, Developer Mozilla,Github Jirka, Vorherige Aufgabe(n) aus EIA1
     */
    window.addEventListener('load', handleLoad);
    interface Item {
        id: number;
        title: string;
        comment: string;
        name: string;
        date: string;
        status: boolean;
    }

    let data: Item[] = [];


    async function handleLoad() {
        let addtask: HTMLElement = <HTMLElement>document.querySelector('#addtask');
        addtask.addEventListener('click', logaddtask);
        loaddata();
    }

    async function logaddtask(): Promise<void> {

        const inputTodo = document.querySelector('#inputTodo') as HTMLInputElement;
        const inputValue = inputTodo.value;

        const inputComment = document.querySelector('#inputComment') as HTMLInputElement;
        const commentValue = inputComment.value;

        const selectName = document.querySelector('#selectname') as HTMLSelectElement;
        const nameValue = selectName.value;

        const datetime = document.querySelector('#datetime') as HTMLInputElement;
        const dateValue = datetime.value;

        let newid = 0;
        let idExists = true
        while (idExists) {
            newid = newid + 1
            idExists = false
            for (let docId in data) {
                let item = data[docId]
                if (item.id == newid) {
                    idExists = true;
                }
            }
        }

        const newItem: Item = {
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



    async function createtask(item: Item): Promise<void> {
        let newDiv = document.createElement('div');
        newDiv.classList.add('inputtask')
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


    async function loaddata(): Promise<void> {
        const response = await fetch("https://webuser.hs-furtwangen.de/~schwerpi/Database/?command=find&collection=TaskList");
        const dataJSON = await response.json();
        data = dataJSON.data;
        console.log(data)
        console.log(dataJSON)
        for (let docId in data) {
            let item = data[docId]

            createtask(item);
        }
    }


    function deletetaskdom(event: Event): void {
        const target = event.target as HTMLElement;
        const divToDelete = target.closest('div');
        divToDelete && divToDelete.remove();
    }


    async function deleteDataFromServer(id: number): Promise<void> {
        let dataBaseIndex = ""
        for (let docId in data) { //wir gehen durch jede docId(z.B.644cdd7d5caa0) in data durch 
            let item = data[docId] // wir holen uns das item für eine docId 
            if (item.id == id) {    // wir schauen ob das item mit docId die gesuchte item.id(man geht in ein item und vergleicht dort die "id") hat
                dataBaseIndex = docId // wenn wir die übereinstimmende id gefunden haben, speichern wir diese in dataBaseIndex
            }
            const deleteUrl = `https://webuser.hs-furtwangen.de/~schwerpi/Database/?command=delete&collection=TaskList&id=${dataBaseIndex}`;
            await fetch(deleteUrl);
        }
    }

}
