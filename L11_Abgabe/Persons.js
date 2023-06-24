"use strict";
var L11_Abgabe;
(function (L11_Abgabe) {
    let Activity;
    (function (Activity) {
        Activity[Activity["WALK"] = 0] = "WALK";
        Activity[Activity["CLIMB"] = 1] = "CLIMB";
        Activity[Activity["FLY"] = 2] = "FLY";
    })(Activity = L11_Abgabe.Activity || (L11_Abgabe.Activity = {}));
    class Person extends L11_Abgabe.MovingObject {
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
                    this.velocity = new L11_Abgabe.Vector(-5, 0);
                    break;
                case Activity.CLIMB:
                    this.velocity = new L11_Abgabe.Vector(-3, -5);
                    break;
                case Activity.FLY:
                    this.velocity = new L11_Abgabe.Vector(10 + L11_Abgabe.windStrength_X, 4);
                    break;
            }
            // Position basierend auf der Geschwindigkeit aktualisieren
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
            if ((this.activity == Activity.FLY) && L11_Abgabe.updateParaglider) {
                this.position.x = L11_Abgabe.paragliderPosition_X + 10 * (Math.random() - 0.5);
                this.position.y = L11_Abgabe.paragliderPosition_Y + 10 * (Math.random() - 0.5);
            }
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
            L11_Abgabe.foregroundCtx.beginPath();
            L11_Abgabe.foregroundCtx.moveTo(this.position.x, this.position.y + 5);
            L11_Abgabe.foregroundCtx.lineTo(this.position.x + 12, this.position.y + 36);
            L11_Abgabe.foregroundCtx.lineTo(this.position.x - 12, this.position.y + 36);
            L11_Abgabe.foregroundCtx.lineTo(this.position.x, this.position.y + 5);
            L11_Abgabe.foregroundCtx.fillStyle = this.colorHsl;
            L11_Abgabe.foregroundCtx.fill();
            //Head of Paraglider 
            L11_Abgabe.foregroundCtx.beginPath();
            L11_Abgabe.foregroundCtx.arc(this.position.x, this.position.y, 8, 0, 2 * Math.PI);
            L11_Abgabe.foregroundCtx.fillStyle = "HSL(25,75%,70%)";
            L11_Abgabe.foregroundCtx.fill();
            L11_Abgabe.foregroundCtx.closePath();
            //Ropes
            L11_Abgabe.foregroundCtx.beginPath();
            L11_Abgabe.foregroundCtx.moveTo(this.position.x + 1, this.position.y + 11);
            L11_Abgabe.foregroundCtx.lineTo(this.position.x + 35, this.position.y - 20);
            L11_Abgabe.foregroundCtx.strokeStyle = "black";
            L11_Abgabe.foregroundCtx.stroke();
            L11_Abgabe.foregroundCtx.closePath();
            L11_Abgabe.foregroundCtx.beginPath();
            L11_Abgabe.foregroundCtx.moveTo(this.position.x - 1, this.position.y + 11);
            L11_Abgabe.foregroundCtx.lineTo(this.position.x - 35, this.position.y - 20);
            L11_Abgabe.foregroundCtx.strokeStyle = "black";
            L11_Abgabe.foregroundCtx.stroke();
            L11_Abgabe.foregroundCtx.closePath();
            //Gleitschirm
            L11_Abgabe.foregroundCtx.beginPath();
            L11_Abgabe.foregroundCtx.ellipse(this.position.x, this.position.y - 25, 40, 12, 0, 0, Math.PI * 2);
            L11_Abgabe.foregroundCtx.fillStyle = this.colorHsl;
            L11_Abgabe.foregroundCtx.fill();
            L11_Abgabe.foregroundCtx.closePath();
            L11_Abgabe.foregroundCtx.restore();
        }
        ;
        drawWalking() {
            L11_Abgabe.foregroundCtx.save();
            //Head of WaitingPersons
            L11_Abgabe.foregroundCtx.beginPath();
            L11_Abgabe.foregroundCtx.arc(this.position.x, this.position.y, 8, 0, 2 * Math.PI);
            L11_Abgabe.foregroundCtx.fillStyle = "HSL(25,75%,70%)";
            L11_Abgabe.foregroundCtx.fill();
            L11_Abgabe.foregroundCtx.closePath();
            //Body of WaitingPiapersons
            L11_Abgabe.foregroundCtx.beginPath();
            L11_Abgabe.foregroundCtx.moveTo(this.position.x, this.position.y + 5);
            L11_Abgabe.foregroundCtx.lineTo(this.position.x + 12, this.position.y + 36);
            L11_Abgabe.foregroundCtx.lineTo(this.position.x - 12, this.position.y + 36);
            L11_Abgabe.foregroundCtx.lineTo(this.position.x, this.position.y + 5);
            L11_Abgabe.foregroundCtx.fillStyle = this.colorHsl;
            L11_Abgabe.foregroundCtx.fill();
            L11_Abgabe.foregroundCtx.restore();
        }
        drawClimbing() {
            L11_Abgabe.foregroundCtx.save();
            //Head of WaitingPersons
            L11_Abgabe.foregroundCtx.beginPath();
            L11_Abgabe.foregroundCtx.arc(this.position.x, this.position.y, 8, 0, 2 * Math.PI);
            L11_Abgabe.foregroundCtx.fillStyle = "HSL(25,75%,70%)";
            L11_Abgabe.foregroundCtx.fill();
            L11_Abgabe.foregroundCtx.closePath();
            //Body of WaitingPiapersons
            L11_Abgabe.foregroundCtx.beginPath();
            L11_Abgabe.foregroundCtx.moveTo(this.position.x, this.position.y + 5);
            L11_Abgabe.foregroundCtx.lineTo(this.position.x + 12, this.position.y + 36);
            L11_Abgabe.foregroundCtx.lineTo(this.position.x - 12, this.position.y + 36);
            L11_Abgabe.foregroundCtx.lineTo(this.position.x, this.position.y + 5);
            L11_Abgabe.foregroundCtx.fillStyle = this.colorHsl;
            L11_Abgabe.foregroundCtx.fill();
            L11_Abgabe.foregroundCtx.restore();
        }
    }
    L11_Abgabe.Person = Person;
})(L11_Abgabe || (L11_Abgabe = {}));
//# sourceMappingURL=Persons.js.map