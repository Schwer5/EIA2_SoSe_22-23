namespace L11_Abgabe {
    export class Windsock extends MovingObject {

        constructor(position: Vector) {
            super(position);
        }

        public update(): void {
            this.draw();
        }

        protected draw(): void {
            foregroundCtx.save();
            foregroundCtx.translate(this.position.x, this.position.y);
    
            // Draw the pole
            foregroundCtx.beginPath();
            foregroundCtx.moveTo(0, 0);
            foregroundCtx.lineTo(0, -80);
            foregroundCtx.strokeStyle = "black";
            foregroundCtx.lineWidth = 2;
            foregroundCtx.stroke();

            foregroundCtx.translate(0,-80);
    
            // Draw the windsock
            foregroundCtx.beginPath();
            foregroundCtx.lineTo(8 * windStrength_X, 15 );
            foregroundCtx.lineTo(0, 30);
            foregroundCtx.lineTo(0, 0);
            foregroundCtx.closePath();
            foregroundCtx.fillStyle = "red";
            foregroundCtx.fill();

    
            foregroundCtx.restore();
        }
    }
}
