"use strict";
// Superklasse Fahrzeug
class Fahrzeug {
    name;
    constructor(name) {
        this.name = name;
    }
    fahren() {
        console.log(`Das Fahrzeug ${this.name} fährt.`);
    }
}
// Subklasse Auto erbt von Fahrzeug
class Auto extends Fahrzeug {
    farbe;
    constructor(name, farbe) {
        super(name);
        this.farbe = farbe;
    }
    hupen() {
        console.log(`Das Auto ${this.name} hupt.`);
    }
}
// Hauptprogramm
const meinAuto = new Auto("VW Golf", "blau");
meinAuto.fahren(); // Ausgabe: Das Fahrzeug VW Golf fährt.
meinAuto.hupen(); // Ausgabe: Das Auto VW Golf hupt.
//# sourceMappingURL=L11.js.map