namespace OMD {
    //Name:<Pia Schwer>
    // Matrikel: <272266>
    //Datum: <20.05.23>
    //Quellen: Stack Overflow,Chat Gpt, Developer Mozilla,Github Jirka

    export class Animal {
        name: string;
        animalType: string;
        food: string;
        foodNeeded: number;
        sound: string;

        constructor(_name: string, _animalType: string, _food: string, _foodNeeded: number, _sound: string) {
            if (!_name || !_animalType || !_food || !_foodNeeded || !_sound) {
                throw new Error("A valid animal must have a name, type, food, foodNeeded, and sound.");
            }
            this.name = _name;
            this.animalType = _animalType;
            this.food = _food;
            this.foodNeeded = _foodNeeded;
            this.sound = _sound;
        }

        sing(): string {
            return `Old MacDonald had a farm, E-I-E-I-O, and on his farm he had a ${this.animalType}, E-I-E-I-O, with a ${this.sound} ${this.sound} here and a ${this.sound} ${this.sound} there, here a ${this.sound}, there a ${this.sound}, everywhere a ${this.sound} ${this.sound}, Old MacDonald had a farm, E-I-E-I-O.`;
        }
        eat(foodStore: { [key: string]: number }): void {
            if (foodStore[this.food] >= this.foodNeeded) {
                foodStore[this.food] -= this.foodNeeded;
                console.log(`${this.name} the ${this.animalType} ate ${this.foodNeeded} units of ${this.food}. Remaining ${this.food} is ${foodStore[this.food]}`);
            } else {
                console.log(`Not enough ${this.food} for ${this.name} the ${this.animalType}.`);
            }
        }
    }

}



