namespace OMD {
    

    window.addEventListener("load", handleLoad);

    let farmAnimals: Animal[] = [
        new Animal("Bessie", "Cow", "Grass", 20, "Moo"),
        new Animal("Chickie", "Chicken", "Grains", 10, "Cluck"),
        new Animal("Doggo", "Dog", "Meat", 15, "Woof"),
        new Animal("Nellie", "Horse", "Grass", 30, "Neigh"),
        new Animal("Piggly", "Pig", "Junk", 25, "Oink")
    ];

    let foodStore = {
        "Grass": 100,
        "Grains": 100,
        "Meat": 100,
        "Junk": 100
    };

    let dayCounter = 0;

    function handleLoad(_event: Event): void {
        document.getElementById("nextDayButton")!.addEventListener("click", function () {
            simulateDays(1, farmAnimals, foodStore);
            dayCounter++;
            console.log(`Day ${dayCounter} has ended.`);
        });
    }

    export function simulateDays(days: number, animals: Animal[], foodStore: { [key: string]: number }) {
        for (let i = 0; i < days; i++) {
            // console.log(`Day ${i+1}:`);
            animals.forEach(animal => {
                console.log(animal.sing());
                animal.eat(foodStore);
            });
        }
    }
}
