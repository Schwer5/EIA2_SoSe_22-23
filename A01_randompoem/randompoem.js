"use strict";
var randompoem;
(function (randompoem) {
    let subjects = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let verbs = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objects = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    //console.log(subjects,verbs,objects);
    for (let index = verbs.length; index > 0; index--) {
        getVerse(subjects, verbs, objects);
    }
    function getVerse(subject, verb, object) {
        let randomsubject = Math.floor(Math.random() * subjects.length);
        let randomverb = Math.floor(Math.random() * verbs.length);
        let randomobject = Math.floor(Math.random() * objects.length);
        let verse = subjects[randomsubject] + " " + verbs[randomverb] + " " + objects[randomobject];
        subject.splice(randomsubject, 1);
        verb.splice(randomverb, 1);
        object.splice(randomobject, 1);
        console.log(verse);
        return verse;
    }
    ;
})(randompoem || (randompoem = {}));
//# sourceMappingURL=randompoem.js.map