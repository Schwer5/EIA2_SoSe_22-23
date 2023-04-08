"use strict";
var Aufgabenliste_Formular;
(function (Aufgabenliste_Formular) {
    /*
     Aufgabe: <Aufgabe 03 Aufgabenliste_Formular>
     Name:<Pia Schwer>
     Matrikel: <272266>
     Datum: <08.04.23>
     Zusammenarbeit mit Theresa Hauser, Marie Eckl
     Quellen: Stack Overflow, Developer Mozilla,Github Jirka, Vorherige Aufgabe(n) aus EIA1
     */
    window.addEventListener('load', handleLoad);
    function handleLoad() {
        let addtask = document.querySelector('#addtask');
        addtask.addEventListener('click', returnaddtask);
        let deletetask = document.querySelector('#deletetask');
        deletetask.addEventListener('click', returndeletetask);
    }
    function returnaddtask() {
        console.log('Du hast eine Aufgabe hinzugefügt');
    }
    function returndeletetask() {
        console.log('Diese Aufgabe wurde gelöscht');
    }
})(Aufgabenliste_Formular || (Aufgabenliste_Formular = {}));
//# sourceMappingURL=Aufgabenliste_Formular.js.map