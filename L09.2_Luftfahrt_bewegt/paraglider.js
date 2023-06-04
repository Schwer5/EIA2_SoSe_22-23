"use strict";
var L092;
(function (L092) {
    let Activity;
    (function (Activity) {
        Activity[Activity["WALK"] = 0] = "WALK";
        Activity[Activity["CLIMB"] = 1] = "CLIMB";
        Activity[Activity["FLY"] = 2] = "FLY";
    })(Activity = L092.Activity || (L092.Activity = {}));
    class Paraglider {
        position;
        velocity;
        activity;
        constructor(position, activity) {
            this.position = position;
            this.activity = activity;
        }
        update() {
            // Activity change based on position
            if (this.position.x < 200 && this.activity == Activity.WALK) { // Replace with your own condition
                this.activity = Activity.CLIMB;
            }
            else if (this.position.y < 200 && this.activity == Activity.CLIMB) { // Replace with your own condition
                this.activity = Activity.FLY;
            }
            else if (this.position.y > 500 && this.activity == Activity.WALK) {
                this.activity = Activity.WALK;
            }
            // Update velocity based on activity
            switch (this.activity) {
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
        draw() {
            switch (this.activity) {
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
        drawParagliding() {
            console.log("paraglider");
            let color = Math.floor(Math.random() * 360);
            let saturation = Math.floor(Math.random() * 30) + 90;
            let lightness = Math.floor(Math.random() * 30) + 30;
            let color2 = Math.floor(Math.random() * 360);
            let saturation2 = Math.floor(Math.random() * 50) + 70;
            let lightness2 = Math.floor(Math.random() * 40) + 20;
            //Body of Paraglider
            L092.crc2.beginPath();
            L092.crc2.moveTo(this.position.x, this.position.y + 5);
            L092.crc2.lineTo(this.position.x + 12, this.position.y + 36);
            L092.crc2.lineTo(this.position.x - 12, this.position.y + 36);
            L092.crc2.lineTo(this.position.x, this.position.y + 5);
            L092.crc2.fillStyle = "hsl(" + color + ", " + saturation + "%, " + lightness + "%)";
            L092.crc2.fill();
            //Head of Paraglider 
            L092.crc2.beginPath();
            L092.crc2.arc(this.position.x, this.position.y, 8, 0, 2 * Math.PI);
            L092.crc2.fillStyle = "HSL(25,75%,70%)";
            L092.crc2.fill();
            L092.crc2.closePath();
            //Ropes
            L092.crc2.beginPath();
            L092.crc2.moveTo(this.position.x + 1, this.position.y + 11);
            L092.crc2.lineTo(this.position.x + 35, this.position.y - 20);
            L092.crc2.strokeStyle = "black";
            L092.crc2.stroke();
            L092.crc2.closePath();
            L092.crc2.beginPath();
            L092.crc2.moveTo(this.position.x - 1, this.position.y + 11);
            L092.crc2.lineTo(this.position.x - 35, this.position.y - 20);
            L092.crc2.strokeStyle = "black";
            L092.crc2.stroke();
            L092.crc2.closePath();
            //Gleitschirm
            L092.crc2.beginPath();
            L092.crc2.ellipse(this.position.x, this.position.y - 25, 40, 12, 0, 0, Math.PI * 2);
            L092.crc2.fillStyle = "hsl(" + color2 + ", " + saturation2 + "%, " + lightness2 + "%)";
            L092.crc2.fill();
            L092.crc2.closePath();
            L092.crc2.restore();
        }
        ;
        drawWalking() {
            console.log("Mountains");
            L092.crc2.save();
            L092.crc2.translate(this.position.x, this.position.y);
            let color = Math.floor(Math.random() * 360);
            let saturation = Math.floor(Math.random() * 30) + 90;
            let lightness = Math.floor(Math.random() * 30) + 30;
            //Head of WaitingPersons
            L092.crc2.beginPath();
            L092.crc2.arc(this.position.x, this.position.y, 8, 0, 2 * Math.PI);
            L092.crc2.fillStyle = "HSL(25,75%,70%)";
            L092.crc2.fill();
            L092.crc2.closePath();
            //Body of WaitingPiapersons
            L092.crc2.beginPath();
            L092.crc2.moveTo(this.position.x, this.position.y + 5);
            L092.crc2.lineTo(this.position.x + 12, this.position.y + 36);
            L092.crc2.lineTo(this.position.x - 12, this.position.y + 36);
            L092.crc2.lineTo(this.position.x, this.position.y + 5);
            L092.crc2.fillStyle = "hsl(" + color + ", " + saturation + "%, " + lightness + "%)";
            L092.crc2.fill();
            L092.crc2.restore();
        }
        drawClimbing() {
            console.log("Mountains");
            L092.crc2.save();
            L092.crc2.translate(this.position.x, this.position.y);
            let color = Math.floor(Math.random() * 360);
            let saturation = Math.floor(Math.random() * 30) + 90;
            let lightness = Math.floor(Math.random() * 30) + 30;
            //Head of WaitingPersons
            L092.crc2.beginPath();
            L092.crc2.arc(this.position.x, this.position.y, 8, 0, 2 * Math.PI);
            L092.crc2.fillStyle = "HSL(25,75%,70%)";
            L092.crc2.fill();
            L092.crc2.closePath();
            //Body of WaitingPiapersons
            L092.crc2.beginPath();
            L092.crc2.moveTo(this.position.x, this.position.y + 5);
            L092.crc2.lineTo(this.position.x + 12, this.position.y + 36);
            L092.crc2.lineTo(this.position.x - 12, this.position.y + 36);
            L092.crc2.lineTo(this.position.x, this.position.y + 5);
            L092.crc2.fillStyle = "hsl(" + color + ", " + saturation + "%, " + lightness + "%)";
            L092.crc2.fill();
            L092.crc2.restore();
        }
    }
    L092.Paraglider = Paraglider;
})(L092 || (L092 = {}));
//# sourceMappingURL=paraglider.js.map