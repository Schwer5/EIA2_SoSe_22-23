"use strict";
var L102;
(function (L102) {
    let Activity;
    (function (Activity) {
        Activity[Activity["WALK"] = 0] = "WALK";
        Activity[Activity["CLIMB"] = 1] = "CLIMB";
        Activity[Activity["FLY"] = 2] = "FLY";
    })(Activity = L102.Activity || (L102.Activity = {}));
    class Person extends L102.MovingObject {
        activity;
        colorHsl;
        constructor(position, activity, colorHsl) {
            super(position);
            this.activity = activity;
            this.colorHsl = colorHsl;
        }
        update() {
            // Aktivitätswechsel basierend auf der Position
            if (this.position.x < 200 && this.activity == Activity.WALK && Math.random() < 0.1) {
                this.activity = Activity.CLIMB;
            }
            else if (this.position.y < 200 && this.activity == Activity.CLIMB) {
                this.activity = Activity.FLY;
            }
            else if (this.position.y > 400 && this.activity == Activity.FLY && Math.random() < 0.1) {
                this.activity = Activity.WALK;
            }
            // Geschwindigkeit basierend auf der Aktivität aktualisieren
            switch (this.activity) {
                case Activity.WALK:
                    this.velocity = new L102.Vector(-5, 0);
                    break;
                case Activity.CLIMB:
                    this.velocity = new L102.Vector(-3, -5);
                    break;
                case Activity.FLY:
                    this.velocity = new L102.Vector(10, 4);
                    break;
            }
            // Position basierend auf der Geschwindigkeit aktualisieren
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
            L102.foregroundCtx.beginPath();
            L102.foregroundCtx.moveTo(this.position.x, this.position.y + 5);
            L102.foregroundCtx.lineTo(this.position.x + 12, this.position.y + 36);
            L102.foregroundCtx.lineTo(this.position.x - 12, this.position.y + 36);
            L102.foregroundCtx.lineTo(this.position.x, this.position.y + 5);
            L102.foregroundCtx.fillStyle = this.colorHsl;
            L102.foregroundCtx.fill();
            //Head of Paraglider 
            L102.foregroundCtx.beginPath();
            L102.foregroundCtx.arc(this.position.x, this.position.y, 8, 0, 2 * Math.PI);
            L102.foregroundCtx.fillStyle = "HSL(25,75%,70%)";
            L102.foregroundCtx.fill();
            L102.foregroundCtx.closePath();
            //Ropes
            L102.foregroundCtx.beginPath();
            L102.foregroundCtx.moveTo(this.position.x + 1, this.position.y + 11);
            L102.foregroundCtx.lineTo(this.position.x + 35, this.position.y - 20);
            L102.foregroundCtx.strokeStyle = "black";
            L102.foregroundCtx.stroke();
            L102.foregroundCtx.closePath();
            L102.foregroundCtx.beginPath();
            L102.foregroundCtx.moveTo(this.position.x - 1, this.position.y + 11);
            L102.foregroundCtx.lineTo(this.position.x - 35, this.position.y - 20);
            L102.foregroundCtx.strokeStyle = "black";
            L102.foregroundCtx.stroke();
            L102.foregroundCtx.closePath();
            //Gleitschirm
            L102.foregroundCtx.beginPath();
            L102.foregroundCtx.ellipse(this.position.x, this.position.y - 25, 40, 12, 0, 0, Math.PI * 2);
            L102.foregroundCtx.fillStyle = this.colorHsl;
            L102.foregroundCtx.fill();
            L102.foregroundCtx.closePath();
            L102.foregroundCtx.restore();
        }
        ;
        drawWalking() {
            L102.foregroundCtx.save();
            //Head of WaitingPersons
            L102.foregroundCtx.beginPath();
            L102.foregroundCtx.arc(this.position.x, this.position.y, 8, 0, 2 * Math.PI);
            L102.foregroundCtx.fillStyle = "HSL(25,75%,70%)";
            L102.foregroundCtx.fill();
            L102.foregroundCtx.closePath();
            //Body of WaitingPiapersons
            L102.foregroundCtx.beginPath();
            L102.foregroundCtx.moveTo(this.position.x, this.position.y + 5);
            L102.foregroundCtx.lineTo(this.position.x + 12, this.position.y + 36);
            L102.foregroundCtx.lineTo(this.position.x - 12, this.position.y + 36);
            L102.foregroundCtx.lineTo(this.position.x, this.position.y + 5);
            L102.foregroundCtx.fillStyle = this.colorHsl;
            L102.foregroundCtx.fill();
            L102.foregroundCtx.restore();
        }
        drawClimbing() {
            L102.foregroundCtx.save();
            //Head of WaitingPersons
            L102.foregroundCtx.beginPath();
            L102.foregroundCtx.arc(this.position.x, this.position.y, 8, 0, 2 * Math.PI);
            L102.foregroundCtx.fillStyle = "HSL(25,75%,70%)";
            L102.foregroundCtx.fill();
            L102.foregroundCtx.closePath();
            //Body of WaitingPiapersons
            L102.foregroundCtx.beginPath();
            L102.foregroundCtx.moveTo(this.position.x, this.position.y + 5);
            L102.foregroundCtx.lineTo(this.position.x + 12, this.position.y + 36);
            L102.foregroundCtx.lineTo(this.position.x - 12, this.position.y + 36);
            L102.foregroundCtx.lineTo(this.position.x, this.position.y + 5);
            L102.foregroundCtx.fillStyle = this.colorHsl;
            L102.foregroundCtx.fill();
            L102.foregroundCtx.restore();
        }
    }
    L102.Person = Person;
})(L102 || (L102 = {}));
//# sourceMappingURL=Persons.js.map