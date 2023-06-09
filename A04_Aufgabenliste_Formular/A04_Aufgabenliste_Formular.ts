namespace A04_Aufgabenliste_Formular {
    /*
     Aufgabe: <Aufgabe 04 Aufgabenliste_Formular>
     Name:<Pia Schwer>
     Matrikel: <272266>
     Datum: <15.04.23>
     Zusammenarbeit mit Theresa Hauser, Marie Eckl
     Quellen: Stack Overflow, Developer Mozilla,Github Jirka, Vorherige Aufgabe(n) aus EIA1
     */
    window.addEventListener('load', handleLoad);

    function handleLoad() {
        let addtask: HTMLElement = <HTMLElement>document.querySelector('#addtask');
        addtask.addEventListener('click', logaddtask);
        console.log(data)
        loaddata();

    }

    function logaddtask(): void {
        const inputTodo = document.querySelector('#inputTodo') as HTMLInputElement;
        const inputValue = inputTodo.value;

        const inputComment = document.querySelector('#inputComment') as HTMLInputElement;
        const commentValue = inputComment.value;

        const selectName = document.querySelector('#selectname') as HTMLSelectElement;
        const nameValue = selectName.value;

        const datetime = document.querySelector('#datetime') as HTMLInputElement;
        const dateValue = datetime.value;

        let newid = 1
        while (-1 != data.findIndex(item => item.id === newid)) {
            newid = newid + 1
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

        inputTodo.value = '';
        inputComment.value = '';
        selectName.value = '';
        datetime.value = '';
    }


    function createtask(item: Item): void {
        const newDiv = document.createElement('div');
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


    function loaddata(): void {
        data.forEach(function (item) {
            createtask(item);
        });
    }


    function deletetask(id: number): void {
        const index = data.findIndex(item => item.id === id);
        data.splice(index, 1);
    }

    function deletetaskdom(event: Event): void {
        const target = event.target as HTMLElement;
        const divToDelete = target.closest('div');
        divToDelete?.remove();
    }

}
