"use strict";
var L102;
(function (L102) {
    class Mosquito extends L102.MovingObject {
        constructor(position) {
            super(position);
        }
        update() {
            this.velocity = { x: 10 * (Math.random() - 0.5), y: 10 * (Math.random() - 0.5) };
            // Update position based on velocity
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
            this.position.x = this.position.x % L102.foregroundCtx.canvas.width;
            this.position.y = this.position.y % L102.foregroundCtx.canvas.height;
            this.draw();
        }
        draw() {
            L102.foregroundCtx.save();
            L102.foregroundCtx.beginPath();
            L102.foregroundCtx.ellipse(this.position.x - 2, this.position.y - 9, 8, 2, 80, 0, 2 * Math.PI);
            L102.foregroundCtx.fillStyle = "lightgrey";
            L102.foregroundCtx.fill();
            // Draw the body
            L102.foregroundCtx.beginPath();
            L102.foregroundCtx.ellipse(this.position.x, this.position.y, 5, 10, Math.PI / 2, 0, 2 * Math.PI);
            L102.foregroundCtx.fillStyle = "grey";
            L102.foregroundCtx.fill();
            // Draw the wings
            L102.foregroundCtx.beginPath();
            L102.foregroundCtx.ellipse(this.position.x + 2, this.position.y - 9, 8, 2, -80, 20, 2 * Math.PI);
            L102.foregroundCtx.fillStyle = "lightgrey";
            L102.foregroundCtx.fill();
            L102.foregroundCtx.restore();
        }
    }
    L102.Mosquito = Mosquito;
})(L102 || (L102 = {}));
//# sourceMappingURL=Mosquito.js.map