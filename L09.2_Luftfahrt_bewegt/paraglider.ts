namespace L092{
    
export enum Activity {
    WALK,
    CLIMB,
    FLY
}

export class Paraglider {
    position: Vector;
    velocity: Vector;
    activity: Activity;
    colorHsl: string;

    constructor(position: Vector, activity: Activity, colorHsl: string) {
        this.position = position;
        this.activity = activity;
        this.colorHsl = colorHsl;
    }

    update(): void {
        // Activity change based on position
        if (this.position.x < 200 && this.activity == Activity.WALK && Math.random()<0.1) {
            this.activity = Activity.CLIMB;
        } else if (this.position.y < 200 && this.activity == Activity.CLIMB) {
            this.activity = Activity.FLY;
        } else if (this.position.y > 400 && this.activity == Activity.FLY && Math.random()<0.1) {
            this.activity = Activity.WALK;
        }

        // Update velocity based on activity
        switch(this.activity) {
            case Activity.WALK:
                this.velocity = { x: -5, y: 0 }; 
                break;
            case Activity.CLIMB:
                this.velocity = { x: -3, y: -5 }; 
                break;
            case Activity.FLY:
                this.velocity = { x: 10, y: 4 };
                break;
        }

        // Update position based on velocity
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        this.draw();
    }
    

    draw(): void {
        switch(this.activity) {
            case Activity.WALK:
                this.drawWalking();
                break;
            case Activity.CLIMB:
                this.drawClimbing();
                break;
            case Activity.FLY:
                this.drawParagliding();
                break;
        }
    }
    
    drawParagliding(): void {
        //Body of Paraglider
        foregroundCtx.beginPath();
        foregroundCtx.moveTo(this.position.x, this.position.y + 5);
        foregroundCtx.lineTo(this.position.x + 12, this.position.y + 36);
        foregroundCtx.lineTo(this.position.x - 12, this.position.y + 36);
        foregroundCtx.lineTo(this.position.x, this.position.y + 5);
        foregroundCtx.fillStyle = this.colorHsl;
        foregroundCtx.fill();

        //Head of Paraglider 
        foregroundCtx.beginPath();
        foregroundCtx.arc(this.position.x, this.position.y, 8, 0, 2 * Math.PI);
        foregroundCtx.fillStyle = "HSL(25,75%,70%)";
        foregroundCtx.fill();
        foregroundCtx.closePath();

        //Ropes
        foregroundCtx.beginPath();
        foregroundCtx.moveTo(this.position.x + 1, this.position.y + 11);
        foregroundCtx.lineTo(this.position.x + 35, this.position.y - 20);
        foregroundCtx.strokeStyle = "black"
        foregroundCtx.stroke();
        foregroundCtx.closePath();

        foregroundCtx.beginPath();
        foregroundCtx.moveTo(this.position.x - 1, this.position.y + 11);
        foregroundCtx.lineTo(this.position.x - 35, this.position.y - 20);
        foregroundCtx.strokeStyle = "black"
        foregroundCtx.stroke();
        foregroundCtx.closePath();

        //Gleitschirm
        foregroundCtx.beginPath();
        foregroundCtx.ellipse(this.position.x, this.position.y - 25, 40, 12, 0, 0, Math.PI * 2);
        foregroundCtx.fillStyle = this.colorHsl;
        foregroundCtx.fill();
        foregroundCtx.closePath();
        foregroundCtx.restore();
    };

    drawWalking(): void {
        foregroundCtx.save();

        //Head of WaitingPersons
        foregroundCtx.beginPath();
        foregroundCtx.arc(this.position.x, this.position.y, 8, 0, 2 * Math.PI);
        foregroundCtx.fillStyle = "HSL(25,75%,70%)";
        foregroundCtx.fill();
        foregroundCtx.closePath()

        //Body of WaitingPiapersons
        foregroundCtx.beginPath();
        foregroundCtx.moveTo(this.position.x, this.position.y + 5);
        foregroundCtx.lineTo(this.position.x + 12, this.position.y + 36);
        foregroundCtx.lineTo(this.position.x - 12, this.position.y + 36);
        foregroundCtx.lineTo(this.position.x, this.position.y + 5);
        foregroundCtx.fillStyle = this.colorHsl;
        foregroundCtx.fill();

        foregroundCtx.restore();
    }

    drawClimbing(): void {
        foregroundCtx.save();

        //Head of WaitingPersons
        foregroundCtx.beginPath();
        foregroundCtx.arc(this.position.x, this.position.y, 8, 0, 2 * Math.PI);
        foregroundCtx.fillStyle = "HSL(25,75%,70%)";
        foregroundCtx.fill();
        foregroundCtx.closePath()

        //Body of WaitingPiapersons
        foregroundCtx.beginPath();
        foregroundCtx.moveTo(this.position.x, this.position.y + 5);
        foregroundCtx.lineTo(this.position.x + 12, this.position.y + 36);
        foregroundCtx.lineTo(this.position.x - 12, this.position.y + 36);
        foregroundCtx.lineTo(this.position.x, this.position.y + 5);
        foregroundCtx.fillStyle = this.colorHsl;
        foregroundCtx.fill();

        foregroundCtx.restore();
    }
}
}
