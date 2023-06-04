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

    constructor(position: Vector, activity: Activity) {
        this.position = position;
        this.activity = activity;
    }

    update(): void {
        // Activity change based on position
        if (this.position.x < 200 && this.activity == Activity.WALK) { // Replace with your own condition
            this.activity = Activity.CLIMB;
        } else if (this.position.y < 200 && this.activity == Activity.CLIMB) { // Replace with your own condition
            this.activity = Activity.FLY;
        } else if (this.position.y > 500 && this.activity == Activity.WALK) {
            this.activity = Activity.WALK;
        }

        // Update velocity based on activity
        switch(this.activity) {
            case Activity.WALK:
                // Update velocity for WALK
                this.velocity = { x: -50, y: 0 }; 
                break;
            case Activity.CLIMB:
                // Update velocity for CLIMB
                this.velocity = { x: 10, y: -50 }; 
                break;
            case Activity.FLY:
                // Update velocity for FLY
                this.velocity = { x: 100, y: 40 };
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
        console.log("paraglider")

        let color = Math.floor(Math.random() * 360);
        let saturation = Math.floor(Math.random() * 30) + 90;
        let lightness = Math.floor(Math.random() * 30) + 30;

        let color2 = Math.floor(Math.random() * 360);
        let saturation2 = Math.floor(Math.random() * 50) + 70;
        let lightness2 = Math.floor(Math.random() * 40) + 20;


        //Body of Paraglider
        crc2.beginPath();
        crc2.moveTo(this.position.x, this.position.y + 5);
        crc2.lineTo(this.position.x + 12, this.position.y + 36);
        crc2.lineTo(this.position.x - 12, this.position.y + 36);
        crc2.lineTo(this.position.x, this.position.y + 5);
        crc2.fillStyle = "hsl(" + color + ", " + saturation + "%, " + lightness + "%)";
        crc2.fill();

        //Head of Paraglider 
        crc2.beginPath();
        crc2.arc(this.position.x, this.position.y, 8, 0, 2 * Math.PI);
        crc2.fillStyle = "HSL(25,75%,70%)";
        crc2.fill();
        crc2.closePath();

        //Ropes
        crc2.beginPath();
        crc2.moveTo(this.position.x + 1, this.position.y + 11);
        crc2.lineTo(this.position.x + 35, this.position.y - 20);
        crc2.strokeStyle = "black"
        crc2.stroke();
        crc2.closePath();

        crc2.beginPath();
        crc2.moveTo(this.position.x - 1, this.position.y + 11);
        crc2.lineTo(this.position.x - 35, this.position.y - 20);
        crc2.strokeStyle = "black"
        crc2.stroke();
        crc2.closePath();

        //Gleitschirm
        crc2.beginPath();
        crc2.ellipse(this.position.x, this.position.y - 25, 40, 12, 0, 0, Math.PI * 2);
        crc2.fillStyle = "hsl(" + color2 + ", " + saturation2 + "%, " + lightness2 + "%)";
        crc2.fill();
        crc2.closePath();
        crc2.restore();
    };

    drawWalking(): void {
        console.log("Mountains");
        crc2.save();
        crc2.translate(this.position.x, this.position.y);
        let color = Math.floor(Math.random() * 360);
        let saturation = Math.floor(Math.random() * 30) + 90;
        let lightness = Math.floor(Math.random() * 30) + 30;

        //Head of WaitingPersons
        crc2.beginPath();
        crc2.arc(this.position.x, this.position.y, 8, 0, 2 * Math.PI);
        crc2.fillStyle = "HSL(25,75%,70%)";
        crc2.fill();
        crc2.closePath()

        //Body of WaitingPiapersons
        crc2.beginPath();
        crc2.moveTo(this.position.x, this.position.y + 5);
        crc2.lineTo(this.position.x + 12, this.position.y + 36);
        crc2.lineTo(this.position.x - 12, this.position.y + 36);
        crc2.lineTo(this.position.x, this.position.y + 5);
        crc2.fillStyle = "hsl(" + color + ", " + saturation + "%, " + lightness + "%)";
        crc2.fill();

        crc2.restore();
    }

    drawClimbing(): void {
        console.log("Mountains");
        crc2.save();
        crc2.translate(this.position.x, this.position.y);
        let color = Math.floor(Math.random() * 360);
        let saturation = Math.floor(Math.random() * 30) + 90;
        let lightness = Math.floor(Math.random() * 30) + 30;

        //Head of WaitingPersons
        crc2.beginPath();
        crc2.arc(this.position.x, this.position.y, 8, 0, 2 * Math.PI);
        crc2.fillStyle = "HSL(25,75%,70%)";
        crc2.fill();
        crc2.closePath()

        //Body of WaitingPiapersons
        crc2.beginPath();
        crc2.moveTo(this.position.x, this.position.y + 5);
        crc2.lineTo(this.position.x + 12, this.position.y + 36);
        crc2.lineTo(this.position.x - 12, this.position.y + 36);
        crc2.lineTo(this.position.x, this.position.y + 5);
        crc2.fillStyle = "hsl(" + color + ", " + saturation + "%, " + lightness + "%)";
        crc2.fill();

        crc2.restore();
    }
}
}
