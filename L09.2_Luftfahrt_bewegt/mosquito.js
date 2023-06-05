"use strict";
var L092;
(function (L092) {
    class Mosquito {
        position;
        velocity;
        constructor(position) {
            this.position = position;
        }
        update() {
            this.velocity = { x: 10 * (Math.random() - 0.5), y: 10 * (Math.random() - 0.5) };
            // Update position based on velocity
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
            this.position.x = this.position.x % L092.foregroundCtx.canvas.width;
            this.position.y = this.position.y % L092.foregroundCtx.canvas.height;
            this.draw();
        }
        draw() {
            console.log("Mosquito", this.position);
            L092.foregroundCtx.save();
            L092.foregroundCtx.beginPath();
            L092.foregroundCtx.ellipse(this.position.x - 2, this.position.y - 9, 8, 2, 80, 0, 2 * Math.PI);
            L092.foregroundCtx.fillStyle = "lightgrey";
            L092.foregroundCtx.fill();
            // Draw the body
            L092.foregroundCtx.beginPath();
            L092.foregroundCtx.ellipse(this.position.x, this.position.y, 5, 10, Math.PI / 2, 0, 2 * Math.PI);
            L092.foregroundCtx.fillStyle = "grey";
            L092.foregroundCtx.fill();
            // Draw the wings
            L092.foregroundCtx.beginPath();
            L092.foregroundCtx.ellipse(this.position.x + 2, this.position.y - 9, 8, 2, -80, 20, 2 * Math.PI);
            L092.foregroundCtx.fillStyle = "lightgrey";
            L092.foregroundCtx.fill();
            L092.foregroundCtx.restore();
        }
    }
    L092.Mosquito = Mosquito;
})(L092 || (L092 = {}));
//# sourceMappingURL=mosquito.js.map