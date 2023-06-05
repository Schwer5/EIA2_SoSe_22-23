"use strict";
// Name:<Pia Schwer>
// Matrikel: <272266>
// Datum: <15.04.23>
// Zusammenarbeit mit Theresa Hauser, Marie Eckl
// Quellen: Stack Overflow, Developer Mozilla,Github Jirka, Vorherige Aufgabe(n) aus EIA1
var L092;
(function (L092) {
    window.addEventListener("load", handleLoad);
    L092.goldenCut = 0.62;
    let paragliders = [];
    let mosquitos = [];
    function handleLoad(_event) {
        let backgroundCanvas = document.querySelector("#background");
        let foregroundCanvas = document.querySelector("#foreground");
        if (!backgroundCanvas)
            return;
        if (!foregroundCanvas)
            return;
        L092.backgroundCtx = backgroundCanvas.getContext('2d');
        L092.foregroundCtx = foregroundCanvas.getContext('2d');
        let horizon = L092.backgroundCtx.canvas.height * L092.goldenCut;
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
        drawWindSock({ x: 350, y: 580 });
        for (let index = 0; index < 10; index++) {
            let startingPointX = 750 + Math.random() * 20;
            let startingPointY = 490 + Math.random() * 20;
            let color = Math.floor(Math.random() * 360);
            let saturation = Math.floor(Math.random() * 30) + 90;
            let lightness = Math.floor(Math.random() * 30) + 30;
            let colorHsl = "hsl(" + color + ", " + saturation + "%, " + lightness + "%)";
            let paraglider = new L092.Paraglider({ x: startingPointX, y: startingPointY }, L092.Activity.WALK, colorHsl);
            paragliders.push(paraglider);
        }
        ;
        for (let index = 0; index < 10; index++) {
            let startingPointX = Math.random() * L092.foregroundCtx.canvas.width;
            let startingPointY = Math.random() * L092.foregroundCtx.canvas.height;
            let mosquito = new L092.Mosquito({ x: startingPointX, y: startingPointY });
            mosquitos.push(mosquito);
        }
        setInterval(update, 40);
    }
    function update() {
        L092.foregroundCtx.clearRect(0, 0, L092.foregroundCtx.canvas.width, L092.foregroundCtx.canvas.height);
        for (let paraglider of paragliders) {
            paraglider.update();
        }
        for (let mosquito of mosquitos) {
            mosquito.update();
        }
    }
    function drawSky() {
        console.log("Background");
        let gradient = L092.backgroundCtx.createLinearGradient(0, 0, 0, L092.backgroundCtx.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(L092.goldenCut - 0.1, "white");
        gradient.addColorStop(L092.goldenCut, "HSL(100,80%,20%");
        gradient.addColorStop(1, "HSL(100,90%,40%");
        L092.backgroundCtx.fillStyle = gradient;
        L092.backgroundCtx.fillRect(0, 0, L092.backgroundCtx.canvas.width, L092.backgroundCtx.canvas.height);
        L092.backgroundCtx.restore();
    }
    function drawSun(_position) {
        console.log("sun", _position);
        L092.backgroundCtx.save();
        L092.backgroundCtx.translate(_position.x, _position.y);
        let r1 = 10;
        let r2 = 100;
        let gradient = L092.backgroundCtx.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60,100%,90%,1");
        gradient.addColorStop(1, "HSLA(60,50%,50%,0");
        L092.backgroundCtx.fillStyle = gradient;
        L092.backgroundCtx.arc(0, 0, r2, 0, 2 * Math.PI);
        L092.backgroundCtx.fill();
        L092.backgroundCtx.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 20;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = L092.backgroundCtx.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        L092.backgroundCtx.save();
        L092.backgroundCtx.translate(_position.x, _position.y);
        L092.backgroundCtx.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            L092.backgroundCtx.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            L092.backgroundCtx.translate(x, y);
            L092.backgroundCtx.fill(particle);
            L092.backgroundCtx.restore();
        }
        L092.backgroundCtx.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains", _position, _min, _max);
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        L092.backgroundCtx.save();
        L092.backgroundCtx.translate(_position.x, _position.y);
        L092.backgroundCtx.beginPath();
        L092.backgroundCtx.moveTo(0, 0);
        L092.backgroundCtx.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L092.backgroundCtx.lineTo(x, y);
        } while (x < L092.backgroundCtx.canvas.width);
        L092.backgroundCtx.lineTo(x, 0);
        L092.backgroundCtx.closePath();
        let gradient = L092.backgroundCtx.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        L092.backgroundCtx.fillStyle = gradient;
        L092.backgroundCtx.fill();
        L092.backgroundCtx.restore();
    }
    function drawLandingArea(_position, _radiusX, _radiusY) {
        L092.backgroundCtx.save();
        L092.backgroundCtx.translate(_position.x, _position.y);
        L092.backgroundCtx.scale(_radiusX / _radiusY, 1);
        L092.backgroundCtx.fillStyle = "green";
        L092.backgroundCtx.beginPath();
        L092.backgroundCtx.arc(0, 0, _radiusY, 0, 2 * Math.PI);
        L092.backgroundCtx.closePath();
        L092.backgroundCtx.fill();
        L092.backgroundCtx.restore();
    }
    function drawTriangle(_position) {
        L092.backgroundCtx.save();
        L092.backgroundCtx.translate(_position.x, _position.y);
        L092.backgroundCtx.beginPath();
        L092.backgroundCtx.moveTo(0, 0); // Erster Punkt des Dreiecks
        L092.backgroundCtx.lineTo(400, 0); // Zweiter Punkt des Dreiecks
        L092.backgroundCtx.lineTo(0, -200); // Dritter Punkt des Dreiecks
        L092.backgroundCtx.closePath(); // Schließt den Pfad und führt zum ersten Punkt zurück
        L092.backgroundCtx.fillStyle = "grey";
        L092.backgroundCtx.fill();
        L092.backgroundCtx.restore();
    }
    function drawKiosk(_position) {
        L092.backgroundCtx.save();
        L092.backgroundCtx.translate(_position.x, _position.y);
        L092.backgroundCtx.beginPath();
        L092.backgroundCtx.moveTo(0, 0); //1
        L092.backgroundCtx.lineTo(70, 0); //2
        L092.backgroundCtx.lineTo(70, -50); //3
        L092.backgroundCtx.lineTo(0, -100); //4
        L092.backgroundCtx.fillStyle = "brown";
        L092.backgroundCtx.fill();
        L092.backgroundCtx.closePath();
        L092.backgroundCtx.beginPath();
        L092.backgroundCtx.moveTo(80, -50);
        L092.backgroundCtx.lineTo(-10, -100);
        L092.backgroundCtx.lineWidth = 10;
        L092.backgroundCtx.strokeStyle = "red";
        L092.backgroundCtx.stroke();
        L092.backgroundCtx.closePath();
        L092.backgroundCtx.restore();
    }
    function drawWaitingPersons(_position) {
        console.log("Mountains");
        L092.backgroundCtx.save();
        L092.backgroundCtx.translate(_position.x, _position.y);
        let color = Math.floor(Math.random() * 360);
        let saturation = Math.floor(Math.random() * 30) + 90;
        let lightness = Math.floor(Math.random() * 30) + 30;
        //Head of WaitingPersons
        L092.backgroundCtx.beginPath();
        L092.backgroundCtx.arc(_position.x, _position.y, 8, 0, 2 * Math.PI);
        L092.backgroundCtx.fillStyle = "HSL(25,75%,70%)";
        L092.backgroundCtx.fill();
        L092.backgroundCtx.closePath();
        //Body of WaitingPiapersons
        L092.backgroundCtx.beginPath();
        L092.backgroundCtx.moveTo(_position.x, _position.y + 5);
        L092.backgroundCtx.lineTo(_position.x + 12, _position.y + 36);
        L092.backgroundCtx.lineTo(_position.x - 12, _position.y + 36);
        L092.backgroundCtx.lineTo(_position.x, _position.y + 5);
        L092.backgroundCtx.fillStyle = "hsl(" + color + ", " + saturation + "%, " + lightness + "%)";
        L092.backgroundCtx.fill();
        L092.backgroundCtx.restore();
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
        L092.backgroundCtx.beginPath();
        L092.backgroundCtx.moveTo(_position.x, _position.y + 5);
        L092.backgroundCtx.lineTo(_position.x + 12, _position.y + 36);
        L092.backgroundCtx.lineTo(_position.x - 12, _position.y + 36);
        L092.backgroundCtx.lineTo(_position.x, _position.y + 5);
        L092.backgroundCtx.fillStyle = "hsl(" + color + ", " + saturation + "%, " + lightness + "%)";
        L092.backgroundCtx.fill();
        //Head of Paraglider 
        L092.backgroundCtx.beginPath();
        L092.backgroundCtx.arc(_position.x, _position.y, 8, 0, 2 * Math.PI);
        L092.backgroundCtx.fillStyle = "HSL(25,75%,70%)";
        L092.backgroundCtx.fill();
        L092.backgroundCtx.closePath();
        //Ropes
        L092.backgroundCtx.beginPath();
        L092.backgroundCtx.moveTo(_position.x + 1, _position.y + 11);
        L092.backgroundCtx.lineTo(_position.x + 35, _position.y - 20);
        L092.backgroundCtx.strokeStyle = "black";
        L092.backgroundCtx.stroke();
        L092.backgroundCtx.closePath();
        L092.backgroundCtx.beginPath();
        L092.backgroundCtx.moveTo(_position.x - 1, _position.y + 11);
        L092.backgroundCtx.lineTo(_position.x - 35, _position.y - 20);
        L092.backgroundCtx.strokeStyle = "black";
        L092.backgroundCtx.stroke();
        L092.backgroundCtx.closePath();
        //Gleitschirm
        L092.backgroundCtx.beginPath();
        L092.backgroundCtx.ellipse(_position.x, _position.y - 25, 40, 12, 0, 0, Math.PI * 2);
        L092.backgroundCtx.fillStyle = "hsl(" + color2 + ", " + saturation2 + "%, " + lightness2 + "%)";
        L092.backgroundCtx.fill();
        L092.backgroundCtx.closePath();
        L092.backgroundCtx.restore();
    }
    ;
    function drawTree(_position) {
        console.log("Tree", _position);
        L092.backgroundCtx.save();
        L092.backgroundCtx.translate(_position.x, _position.y);
        L092.backgroundCtx.beginPath();
        L092.backgroundCtx.fillStyle = "brown";
        L092.backgroundCtx.fillRect(_position.x, _position.y, 15, 100);
        L092.backgroundCtx.closePath();
        L092.backgroundCtx.beginPath();
        L092.backgroundCtx.arc(_position.x + 7, _position.y - 30, 40, 0, 2 * Math.PI);
        L092.backgroundCtx.fillStyle = "green";
        L092.backgroundCtx.fill();
        L092.backgroundCtx.closePath();
        L092.backgroundCtx.restore();
    }
    function drawWindSock(_position) {
        console.log("WindSock", _position);
        L092.backgroundCtx.save();
        L092.backgroundCtx.translate(_position.x, _position.y);
        // Draw the pole
        L092.backgroundCtx.beginPath();
        L092.backgroundCtx.moveTo(0, 0);
        L092.backgroundCtx.lineTo(0, -80);
        L092.backgroundCtx.strokeStyle = "black";
        L092.backgroundCtx.lineWidth = 2;
        L092.backgroundCtx.stroke();
        // Draw the windsock
        L092.backgroundCtx.beginPath();
        L092.backgroundCtx.ellipse(30, -80, 30, 10, Math.PI, 0, 1.75 * Math.PI);
        L092.backgroundCtx.fillStyle = "red";
        L092.backgroundCtx.fill();
        L092.backgroundCtx.closePath();
        L092.backgroundCtx.beginPath();
        L092.backgroundCtx.ellipse(30, -80, 25, 5, Math.PI, 0, 1.75 * Math.PI);
        L092.backgroundCtx.fillStyle = "white";
        L092.backgroundCtx.fill();
        L092.backgroundCtx.closePath();
        L092.backgroundCtx.restore();
    }
})(L092 || (L092 = {}));
//# sourceMappingURL=L09.2_Luftfahrt_bewegt.js.map