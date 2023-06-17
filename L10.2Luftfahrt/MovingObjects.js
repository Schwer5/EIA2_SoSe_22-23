"use strict";
var L102;
(function (L102) {
    class Vector {
        x;
        y;
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }
    L102.Vector = Vector;
    class MovingObject {
        position;
        velocity;
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
    L102.MovingObject = MovingObject;
})(L102 || (L102 = {}));
//# sourceMappingURL=MovingObjects.js.map