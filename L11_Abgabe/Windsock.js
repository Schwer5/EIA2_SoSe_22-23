"use strict";
var L11_Abgabe;
(function (L11_Abgabe) {
    class Windsock extends L11_Abgabe.MovingObject {
        constructor(position) {
            super(position);
        }
        update() {
            this.draw();
        }
        draw() {
            L11_Abgabe.foregroundCtx.save();
            L11_Abgabe.foregroundCtx.translate(this.position.x, this.position.y);
            // Draw the pole
            L11_Abgabe.foregroundCtx.beginPath();
            L11_Abgabe.foregroundCtx.moveTo(0, 0);
            L11_Abgabe.foregroundCtx.lineTo(0, -80);
            L11_Abgabe.foregroundCtx.strokeStyle = "black";
            L11_Abgabe.foregroundCtx.lineWidth = 2;
            L11_Abgabe.foregroundCtx.stroke();
            L11_Abgabe.foregroundCtx.translate(0, -80);
            // Draw the windsock
            L11_Abgabe.foregroundCtx.beginPath();
            L11_Abgabe.foregroundCtx.lineTo(8 * L11_Abgabe.windStrength_X, 15);
            L11_Abgabe.foregroundCtx.lineTo(0, 30);
            L11_Abgabe.foregroundCtx.lineTo(0, 0);
            L11_Abgabe.foregroundCtx.closePath();
            L11_Abgabe.foregroundCtx.fillStyle = "red";
            L11_Abgabe.foregroundCtx.fill();
            L11_Abgabe.foregroundCtx.restore();
        }
    }
    L11_Abgabe.Windsock = Windsock;
})(L11_Abgabe || (L11_Abgabe = {}));
//# sourceMappingURL=Windsock.js.map