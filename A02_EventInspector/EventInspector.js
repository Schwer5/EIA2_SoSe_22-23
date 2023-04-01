"use strict";
var EventInspector;
(function (EventInspector) {
    /*
         Aufgabe: <Aufgabe 02 EventInspector>
         Name:<Pia Schwer>
         Matrikel: <272266>
         Datum: <01.04.23>
         Zusammenarbeit mit Theresa Hauser, Marie Eckl
         Quellen: Stack Overflow, Developer Mozilla, L02 Jirka
         */
    window.addEventListener('load', handleLoad);
    function handleLoad() {
        let div0 = document.getElementById('div0');
        let div1 = document.getElementById('div1');
        document.addEventListener('mousemove', setInfoBox);
        document.addEventListener('click', logInfo);
        document.addEventListener('keyup', logInfo);
        document.body.addEventListener('click', logInfo);
        document.body.addEventListener('keyup', logInfo);
        div0.addEventListener('click', logInfo);
        div0.addEventListener('keyup', logInfo);
        div1.addEventListener('click', logInfo);
        div1.addEventListener('keyup', logInfo);
        let button = document.getElementById('button');
        button.addEventListener('click', customevent);
        document.addEventListener('° reingeguckt :)', output);
    }
    //_event=parameter
    function setInfoBox(_event) {
        let span = document.getElementById('span');
        let x = _event.clientX;
        let x1 = x + 10;
        let y = _event.clientY;
        let y1 = y + 10;
        //console.log(x);
        //console.log(y);
        span.innerHTML = 'x Position: ' + x + '    y Position: ' + y;
        span.style.position = 'fixed';
        span.style.top = `${y1}px`;
        span.style.left = `${x1}px`; //$lässt mich variable in string reinschreiben
    }
    //logInfo wird Event übergeben
    function logInfo(_event) {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
    }
    //mit document.getElementbyID durchsuche ich Element nach meinem Button mit der id 'button'
    function customevent(_event) {
        let button = document.getElementById('button');
        let customeventnew = new CustomEvent("° reingeguckt :)", { bubbles: true }); //CustomEvent(custom=(maßgeschneidert) ist eine Funktion die mir eine Instanz eines Objekts vom Typ:Customevent erstellt(sagt mir z.B. dass ich Zootiere habe)
        button.dispatchEvent(customeventnew);
    }
    function output(_event) {
        console.log('° reingeguckt :)');
    }
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=EventInspector.js.map