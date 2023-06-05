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
        colorHsl;
        constructor(position, activity, colorHsl) {
            this.position = position;
            this.activity = activity;
            this.colorHsl = colorHsl;
        }
        update() {
            // Activity change based on position
            if (this.position.x < 200 && this.activity == Activity.WALK && Math.random() < 0.1) {
                this.activity = Activity.CLIMB;
            }
            else if (this.position.y < 200 && this.activity == Activity.CLIMB) {
                this.activity = Activity.FLY;
            }
            else if (this.position.y > 400 && this.activity == Activity.FLY && Math.random() < 0.1) {
                this.activity = Activity.WALK;
            }
            // Update velocity based on activity
            switch (this.activity) {
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
            //Body of Paraglider
            L092.foregroundCtx.beginPath();
            L092.foregroundCtx.moveTo(this.position.x, this.position.y + 5);
            L092.foregroundCtx.lineTo(this.position.x + 12, this.position.y + 36);
            L092.foregroundCtx.lineTo(this.position.x - 12, this.position.y + 36);
            L092.foregroundCtx.lineTo(this.position.x, this.position.y + 5);
            L092.foregroundCtx.fillStyle = this.colorHsl;
            L092.foregroundCtx.fill();
            //Head of Paraglider 
            L092.foregroundCtx.beginPath();
            L092.foregroundCtx.arc(this.position.x, this.position.y, 8, 0, 2 * Math.PI);
            L092.foregroundCtx.fillStyle = "HSL(25,75%,70%)";
            L092.foregroundCtx.fill();
            L092.foregroundCtx.closePath();
            //Ropes
            L092.foregroundCtx.beginPath();
            L092.foregroundCtx.moveTo(this.position.x + 1, this.position.y + 11);
            L092.foregroundCtx.lineTo(this.position.x + 35, this.position.y - 20);
            L092.foregroundCtx.strokeStyle = "black";
            L092.foregroundCtx.stroke();
            L092.foregroundCtx.closePath();
            L092.foregroundCtx.beginPath();
            L092.foregroundCtx.moveTo(this.position.x - 1, this.position.y + 11);
            L092.foregroundCtx.lineTo(this.position.x - 35, this.position.y - 20);
            L092.foregroundCtx.strokeStyle = "black";
            L092.foregroundCtx.stroke();
            L092.foregroundCtx.closePath();
            //Gleitschirm
            L092.foregroundCtx.beginPath();
            L092.foregroundCtx.ellipse(this.position.x, this.position.y - 25, 40, 12, 0, 0, Math.PI * 2);
            L092.foregroundCtx.fillStyle = this.colorHsl;
            L092.foregroundCtx.fill();
            L092.foregroundCtx.closePath();
            L092.foregroundCtx.restore();
        }
        ;
        drawWalking() {
            L092.foregroundCtx.save();
            //Head of WaitingPersons
            L092.foregroundCtx.beginPath();
            L092.foregroundCtx.arc(this.position.x, this.position.y, 8, 0, 2 * Math.PI);
            L092.foregroundCtx.fillStyle = "HSL(25,75%,70%)";
            L092.foregroundCtx.fill();
            L092.foregroundCtx.closePath();
            //Body of WaitingPiapersons
            L092.foregroundCtx.beginPath();
            L092.foregroundCtx.moveTo(this.position.x, this.position.y + 5);
            L092.foregroundCtx.lineTo(this.position.x + 12, this.position.y + 36);
            L092.foregroundCtx.lineTo(this.position.x - 12, this.position.y + 36);
            L092.foregroundCtx.lineTo(this.position.x, this.position.y + 5);
            L092.foregroundCtx.fillStyle = this.colorHsl;
            L092.foregroundCtx.fill();
            L092.foregroundCtx.restore();
        }
        drawClimbing() {
            L092.foregroundCtx.save();
            //Head of WaitingPersons
            L092.foregroundCtx.beginPath();
            L092.foregroundCtx.arc(this.position.x, this.position.y, 8, 0, 2 * Math.PI);
            L092.foregroundCtx.fillStyle = "HSL(25,75%,70%)";
            L092.foregroundCtx.fill();
            L092.foregroundCtx.closePath();
            //Body of WaitingPiapersons
            L092.foregroundCtx.beginPath();
            L092.foregroundCtx.moveTo(this.position.x, this.position.y + 5);
            L092.foregroundCtx.lineTo(this.position.x + 12, this.position.y + 36);
            L092.foregroundCtx.lineTo(this.position.x - 12, this.position.y + 36);
            L092.foregroundCtx.lineTo(this.position.x, this.position.y + 5);
            L092.foregroundCtx.fillStyle = this.colorHsl;
            L092.foregroundCtx.fill();
            L092.foregroundCtx.restore();
        }
    }
    L092.Paraglider = Paraglider;
})(L092 || (L092 = {}));
//# sourceMappingURL=paraglider.js.map