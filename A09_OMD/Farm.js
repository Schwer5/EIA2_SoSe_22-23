"use strict";
var OMD;
(function (OMD) {
    window.addEventListener("load", handleLoad);
    let farmAnimals = [
        new OMD.Animal("Bessie", "Cow", "Grass", 20, "Moo"),
        new OMD.Animal("Chickie", "Chicken", "Grains", 10, "Cluck"),
        new OMD.Animal("Doggo", "Dog", "Meat", 15, "Woof"),
        new OMD.Animal("Nellie", "Horse", "Grass", 30, "Neigh"),
        new OMD.Animal("Piggly", "Pig", "Junk", 25, "Oink")
    ];
    let foodStore = {
        "Grass": 100,
        "Grains": 100,
        "Meat": 100,
        "Junk": 100
    };
    let dayCounter = 0;
    function handleLoad(_event) {
        document.getElementById("nextDayButton").addEventListener("click", function () {
            simulateDays(1, farmAnimals, foodStore);
            dayCounter++;
            console.log(`Day ${dayCounter} has ended.`);
        });
    }
    function simulateDays(days, animals, foodStore) {
        for (let i = 0; i < days; i++) {
            // console.log(`Day ${i+1}:`);
            animals.forEach(animal => {
                console.log(animal.sing());
                animal.eat(foodStore);
            });
        }
    }
    OMD.simulateDays = simulateDays;
})(OMD || (OMD = {}));
//# sourceMappingURL=Farm.js.map