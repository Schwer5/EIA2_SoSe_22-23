"use strict";
var L11_Abgabe;
(function (L11_Abgabe) {
    class Mosquito extends L11_Abgabe.MovingObject {
        constructor(position) {
            super(position);
        }
        update() {
            this.velocity = { x: 10 * (Math.random() - 0.5), y: 10 * (Math.random() - 0.5) };
            // Update position based on velocity
            this.position.x += this.velocity.x + L11_Abgabe.windStrength_X;
            this.position.y += this.velocity.y;
            this.position.x = this.position.x % L11_Abgabe.foregroundCtx.canvas.width;
            this.position.y = this.position.y % L11_Abgabe.foregroundCtx.canvas.height;
            this.draw();
        }
        draw() {
            L11_Abgabe.foregroundCtx.save();
            L11_Abgabe.foregroundCtx.beginPath();
            L11_Abgabe.foregroundCtx.ellipse(this.position.x - 2, this.position.y - 9, 8, 2, 80, 0, 2 * Math.PI);
            L11_Abgabe.foregroundCtx.fillStyle = "lightgrey";
            L11_Abgabe.foregroundCtx.fill();
            // Draw the body
            L11_Abgabe.foregroundCtx.beginPath();
            L11_Abgabe.foregroundCtx.ellipse(this.position.x, this.position.y, 5, 10, Math.PI / 2, 0, 2 * Math.PI);
            L11_Abgabe.foregroundCtx.fillStyle = "grey";
            L11_Abgabe.foregroundCtx.fill();
            // Draw the wings
            L11_Abgabe.foregroundCtx.beginPath();
            L11_Abgabe.foregroundCtx.ellipse(this.position.x + 2, this.position.y - 9, 8, 2, -80, 20, 2 * Math.PI);
            L11_Abgabe.foregroundCtx.fillStyle = "lightgrey";
            L11_Abgabe.foregroundCtx.fill();
            L11_Abgabe.foregroundCtx.restore();
        }
    }
    L11_Abgabe.Mosquito = Mosquito;
})(L11_Abgabe || (L11_Abgabe = {}));
//# sourceMappingURL=Mosquito.js.map