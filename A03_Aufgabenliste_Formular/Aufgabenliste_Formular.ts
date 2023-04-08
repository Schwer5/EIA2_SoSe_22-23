namespace Aufgabenliste_Formular {
    window.addEventListener('load', handleLoad);

    function handleLoad (){
        let addtask: HTMLElement = <HTMLElement>document.querySelector('#addtask');
        addtask.addEventListener('click', returnaddtask)
        let deletetask: HTMLElement=<HTMLElement> document.querySelector('#deletetask');
        deletetask.addEventListener('click',returndeletetask)

    }

function returnaddtask (){
    console.log('Du hast eine Aufgabe hinzugefügt')
}

function returndeletetask() {
    console.log('Diese Aufgabe wurde gelöscht')
}


















}