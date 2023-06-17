// Superklasse Fahrzeug
abstract class Fahrzeug {
    constructor(public name: string) {}
  
    fahren(): void {
      console.log(`Das Fahrzeug ${this.name} fährt.`);
    }
  }
  
  // Subklasse Auto erbt von Fahrzeug
  class Auto extends Fahrzeug {
    constructor(name: string, public farbe: string) {
      super(name);
    }
  
    hupen(): void {
      console.log(`Das Auto ${this.name} hupt.`);
    }
  }
  
  // Hauptprogramm
  const meinAuto = new Auto("VW Golf", "blau");
  meinAuto.fahren(); // Ausgabe: Das Fahrzeug VW Golf fährt.
  meinAuto.hupen(); // Ausgabe: Das Auto VW Golf hupt.
  
