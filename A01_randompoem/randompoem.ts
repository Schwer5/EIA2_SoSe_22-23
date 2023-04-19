namespace randompoem {

let subjects: string[]=["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
let verbs: string[]=["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
let objects: string[]=["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];

//console.log(subjects,verbs,objects);


for (let index = verbs.length; index > 0; index--) {
    getVerse(subjects, verbs, objects);
}

function getVerse(subject: string[], verb: string[], object: string[]): string {
    let randomsubject: number = Math.floor(Math.random() * subjects.length);
    let randomverb: number = Math.floor(Math.random() * verbs.length);
    let randomobject: number = Math.floor(Math.random() * objects.length);
    
    let verse: string = subjects[randomsubject] + " " + verbs[randomverb] + " " + objects[randomobject];

    subject.splice(randomsubject, 1);
    verb.splice(randomverb, 1);
    object.splice(randomobject, 1);

    console.log(verse);
    return verse;

};

document.querySelector("#pressbutton")?.addEventListener("click",sendMessage);

function sendMessage(){
    let send = document.querySelector("#text") as HTMLHeadingElement;
    send.innerHTML= 'nadu';
}





















}