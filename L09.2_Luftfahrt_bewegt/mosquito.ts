namespace L092 {
    export class Mosquito {
        position: Vector;
        velocity: Vector;


        constructor(position: Vector) {
            this.position = position;
        }

        update(): void {
            this.velocity = { x: 10*(Math.random()-0.5), y: 10*(Math.random()-0.5)}

            // Update position based on velocity
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;

            this.position.x = this.position.x % foregroundCtx.canvas.width;
            this.position.y = this.position.y % foregroundCtx.canvas.height;

            this.draw();
        }


        draw(): void  {
                console.log("Mosquito", this.position);
                foregroundCtx.save();
        
                foregroundCtx.beginPath();
                foregroundCtx.ellipse(this.position.x-2, this.position.y-9, 8, 2, 80, 0, 2 * Math.PI);
                foregroundCtx.fillStyle = "lightgrey";
                foregroundCtx.fill();
        
                // Draw the body
                foregroundCtx.beginPath();
                foregroundCtx.ellipse(this.position.x, this.position.y, 5, 10, Math.PI / 2, 0, 2 * Math.PI);
                foregroundCtx.fillStyle = "grey";
                foregroundCtx.fill();
        
                // Draw the wings
                foregroundCtx.beginPath();
                foregroundCtx.ellipse(this.position.x+2, this.position.y-9, 8, 2, -80, 20, 2 * Math.PI);
                foregroundCtx.fillStyle = "lightgrey";
                foregroundCtx.fill();
        
                foregroundCtx.restore();
            }
        }
    }

