namespace L11_Abgabe {
    export class Mosquito extends MovingObject {

        constructor(position: Vector) {
            super(position);
        }

        public update(): void {
            this.velocity = { x: 10 * (Math.random() - 0.5), y: 10 * (Math.random() - 0.5) }

            // Update position based on velocity
            this.position.x += this.velocity.x + windStrength_X;
            this.position.y += this.velocity.y;

            this.position.x = this.position.x % foregroundCtx.canvas.width;
            this.position.y = this.position.y % foregroundCtx.canvas.height;

            this.draw();
        }

        protected draw(): void {
            foregroundCtx.save();

            foregroundCtx.beginPath();
            foregroundCtx.ellipse(this.position.x - 2, this.position.y - 9, 8, 2, 80, 0, 2 * Math.PI);
            foregroundCtx.fillStyle = "lightgrey";
            foregroundCtx.fill();

            // Draw the body
            foregroundCtx.beginPath();
            foregroundCtx.ellipse(this.position.x, this.position.y, 5, 10, Math.PI / 2, 0, 2 * Math.PI);
            foregroundCtx.fillStyle = "grey";
            foregroundCtx.fill();

            // Draw the wings
            foregroundCtx.beginPath();
            foregroundCtx.ellipse(this.position.x + 2, this.position.y - 9, 8, 2, -80, 20, 2 * Math.PI);
            foregroundCtx.fillStyle = "lightgrey";
            foregroundCtx.fill();

            foregroundCtx.restore();
        }
    }
}



