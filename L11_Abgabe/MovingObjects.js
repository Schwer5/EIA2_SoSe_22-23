"use strict";
var L11_Abgabe;
(function (L11_Abgabe) {
    class Vector {
        x;
        y;
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }
    L11_Abgabe.Vector = Vector;
    class MovingObject {
        position = new Vector(0, 0);
        velocity = new Vector(0, 0);
        constructor(position) {
            this.position = position;
        }
        update() {
            // In Unterklassen zu implementieren
        }
        draw() {
            // In Unterklassen zu implementieren
        }
    }
    L11_Abgabe.MovingObject = MovingObject;
})(L11_Abgabe || (L11_Abgabe = {}));
//# sourceMappingURL=MovingObjects.js.map