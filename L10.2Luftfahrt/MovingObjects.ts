namespace L102 {
    export class Vector {
        x: number;
        y: number;

        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }
    }

    export abstract class MovingObject {
        position: Vector;
        velocity: Vector;

        constructor(position: Vector) {
            this.position = position;
        }

        update(): void {
            // In Unterklassen zu implementieren
        }

        draw(): void {
            // In Unterklassen zu implementieren
        }
    }
}