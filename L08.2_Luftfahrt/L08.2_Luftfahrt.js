"use strict";
var L082;
(function (L082) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let goldenCut = 0.62;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        let horizon = crc2.canvas.height * goldenCut;
        let posMountains = { x: 0, y: horizon };
        drawSky();
        drawSun({ x: 100, y: 75 });
        drawCloud({ x: 500, y: 125 }, { x: 250, y: 75 });
        drawMountains(posMountains, 75, 200, "grey", "white");
        drawMountains(posMountains, 50, 150, "grey", "lightgrey");
        drawTriangle({ x: 0, y: 440 });
        drawTree({ x: 100, y: 200 });
        drawTree({ x: 50, y: 250 });
        drawTree({ x: 20, y: 190 });
        drawLandingArea({ x: 400, y: 500 }, 220, 60);
        drawKiosk({ x: 700, y: 550 });
        drawWaitingPersons({ x: 330, y: 250 });
        drawWaitingPersons({ x: 339, y: 245 });
        drawWaitingPersons({ x: 320, y: 254 });
        drawParaglider({ x: 190, y: 90 });
        drawParaglider({ x: 150, y: 250 });
        drawParaglider({ x: 520, y: 280 });
        drawParaglider({ x: 400, y: 100 });
        drawWindSock({ x: 350, y: 580 });
        drawMosquito({ x: 80, y: 240 });
        drawMosquito({ x: 380, y: 200 });
        drawMosquito({ x: 500, y: 500 });
        drawMosquito({ x: 650, y: 390 });
    }
    function drawSky() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(goldenCut - 0.1, "white");
        gradient.addColorStop(goldenCut, "HSL(100,80%,20%");
        gradient.addColorStop(1, "HSL(100,90%,40%");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.restore();
    }
    function drawSun(_position) {
        console.log("sun", _position);
        crc2.save();
        crc2.translate(_position.x, _position.y);
        let r1 = 10;
        let r2 = 100;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60,100%,90%,1");
        gradient.addColorStop(1, "HSLA(60,50%,50%,0");
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 20;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains", _position, _min, _max);
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    function drawLandingArea(_position, _radiusX, _radiusY) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.scale(_radiusX / _radiusY, 1);
        crc2.fillStyle = "green";
        crc2.beginPath();
        crc2.arc(0, 0, _radiusY, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.restore();
    }
    function drawTriangle(_position) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0); // Erster Punkt des Dreiecks
        crc2.lineTo(400, 0); // Zweiter Punkt des Dreiecks
        crc2.lineTo(0, -200); // Dritter Punkt des Dreiecks
        crc2.closePath(); // Schließt den Pfad und führt zum ersten Punkt zurück
        crc2.fillStyle = "grey";
        crc2.fill();
        crc2.restore();
    }
    function drawKiosk(_position) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0); //1
        crc2.lineTo(70, 0); //2
        crc2.lineTo(70, -50); //3
        crc2.lineTo(0, -100); //4
        crc2.fillStyle = "brown";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(80, -50);
        crc2.lineTo(-10, -100);
        crc2.lineWidth = 10;
        crc2.strokeStyle = "red";
        crc2.stroke();
        crc2.closePath();
        crc2.restore();
    }
    function drawWaitingPersons(_position) {
        console.log("Mountains");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        let color = Math.floor(Math.random() * 360);
        let saturation = Math.floor(Math.random() * 30) + 90;
        let lightness = Math.floor(Math.random() * 30) + 30;
        //Head of WaitingPersons
        crc2.beginPath();
        crc2.arc(_position.x, _position.y, 8, 0, 2 * Math.PI);
        crc2.fillStyle = "HSL(25,75%,70%)";
        crc2.fill();
        crc2.closePath();
        //Body of WaitingPiapersons
        crc2.beginPath();
        crc2.moveTo(_position.x, _position.y + 5);
        crc2.lineTo(_position.x + 12, _position.y + 36);
        crc2.lineTo(_position.x - 12, _position.y + 36);
        crc2.lineTo(_position.x, _position.y + 5);
        crc2.fillStyle = "hsl(" + color + ", " + saturation + "%, " + lightness + "%)";
        crc2.fill();
        crc2.restore();
    }
    function drawParaglider(_position) {
        console.log("paraglider");
        let color = Math.floor(Math.random() * 360);
        let saturation = Math.floor(Math.random() * 30) + 90;
        let lightness = Math.floor(Math.random() * 30) + 30;
        let color2 = Math.floor(Math.random() * 360);
        let saturation2 = Math.floor(Math.random() * 50) + 70;
        let lightness2 = Math.floor(Math.random() * 40) + 20;
        //Body of Paraglider
        crc2.beginPath();
        crc2.moveTo(_position.x, _position.y + 5);
        crc2.lineTo(_position.x + 12, _position.y + 36);
        crc2.lineTo(_position.x - 12, _position.y + 36);
        crc2.lineTo(_position.x, _position.y + 5);
        crc2.fillStyle = "hsl(" + color + ", " + saturation + "%, " + lightness + "%)";
        crc2.fill();
        //Head of Paraglider 
        crc2.beginPath();
        crc2.arc(_position.x, _position.y, 8, 0, 2 * Math.PI);
        crc2.fillStyle = "HSL(25,75%,70%)";
        crc2.fill();
        crc2.closePath();
        //Ropes
        crc2.beginPath();
        crc2.moveTo(_position.x + 1, _position.y + 11);
        crc2.lineTo(_position.x + 35, _position.y - 20);
        crc2.strokeStyle = "black";
        crc2.stroke();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_position.x - 1, _position.y + 11);
        crc2.lineTo(_position.x - 35, _position.y - 20);
        crc2.strokeStyle = "black";
        crc2.stroke();
        crc2.closePath();
        //Gleitschirm
        crc2.beginPath();
        crc2.ellipse(_position.x, _position.y - 25, 40, 12, 0, 0, Math.PI * 2);
        crc2.fillStyle = "hsl(" + color2 + ", " + saturation2 + "%, " + lightness2 + "%)";
        crc2.fill();
        crc2.closePath();
        crc2.restore();
    }
    ;
    function drawTree(_position) {
        console.log("Tree", _position);
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.fillStyle = "brown";
        crc2.fillRect(_position.x, _position.y, 15, 100);
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(_position.x + 7, _position.y - 30, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "green";
        crc2.fill();
        crc2.closePath();
        crc2.restore();
    }
    function drawWindSock(_position) {
        console.log("WindSock", _position);
        crc2.save();
        crc2.translate(_position.x, _position.y);
        // Draw the pole
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -80);
        crc2.strokeStyle = "black";
        crc2.lineWidth = 2;
        crc2.stroke();
        // Draw the windsock
        crc2.beginPath();
        crc2.ellipse(30, -80, 30, 10, Math.PI, 0, 1.75 * Math.PI);
        crc2.fillStyle = "red";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.ellipse(30, -80, 25, 5, Math.PI, 0, 1.75 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.closePath();
        crc2.restore();
    }
    function drawMosquito(_position) {
        console.log("Mosquito", _position);
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.ellipse(-2, -9, 8, 2, 80, 0, 2 * Math.PI);
        crc2.fillStyle = "lightgrey";
        crc2.fill();
        // Draw the body
        crc2.beginPath();
        crc2.ellipse(0, 0, 5, 10, Math.PI / 2, 0, 2 * Math.PI);
        crc2.fillStyle = "grey";
        crc2.fill();
        // Draw the wings
        crc2.beginPath();
        crc2.ellipse(2, -9, 8, 2, -80, 20, 2 * Math.PI);
        crc2.fillStyle = "lightgrey";
        crc2.fill();
        crc2.restore();
    }
})(L082 || (L082 = {}));
//# sourceMappingURL=L08.2_Luftfahrt.js.map