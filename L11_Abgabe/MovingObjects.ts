namespace L11_Abgabe {
    export class Vector {
        x: number;
        y: number;

        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }
    }

    export abstract class MovingObject {
        position: Vector = new Vector(0,0);
        velocity: Vector = new Vector(0,0);

        constructor(position: Vector) {
            this.position = position;
        }

        public update(): void {
            // In Unterklassen zu implementieren
        }

        protected draw(): void {
            // In Unterklassen zu implementieren
        }
    }
}