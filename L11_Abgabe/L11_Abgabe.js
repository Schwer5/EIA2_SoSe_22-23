"use strict";
// Name:<Pia Schwer>
// Matrikel: <272266>
// Datum: <15.04.23>
// Zusammenarbeit mit Theresa Hauser, Marie Eckl
// Quellen: Stack Overflow, Developer Mozilla,Github Jirka, Vorherige Aufgabe(n) aus EIA1
var L11_Abgabe;
(function (L11_Abgabe) {
    let Key;
    (function (Key) {
        Key["UP"] = "ArrowUp";
        Key["DOWN"] = "ArrowDown";
        Key["LEFT"] = "ArrowLeft";
        Key["RIGHT"] = "ArrowRight";
    })(Key || (Key = {}));
    let WindDirection;
    (function (WindDirection) {
        WindDirection[WindDirection["RIGHT"] = 1] = "RIGHT";
        WindDirection[WindDirection["LEFT"] = -1] = "LEFT";
    })(WindDirection || (WindDirection = {}));
    window.addEventListener("load", handleLoad);
    window.addEventListener("keydown", handleKeyDown);
    L11_Abgabe.goldenCut = 0.62;
    L11_Abgabe.windStrength_X = 0;
    L11_Abgabe.updateParaglider = false;
    L11_Abgabe.paragliderPosition_X = 0;
    L11_Abgabe.paragliderPosition_Y = 0;
    L11_Abgabe.windStrength = 5;
    L11_Abgabe.windDirection = 1;
    let movingObjects = [];
    function handleLoad(_event) {
        let backgroundCanvas = document.querySelector("#background");
        let foregroundCanvas = document.querySelector("#foreground");
        if (!backgroundCanvas)
            return;
        if (!foregroundCanvas)
            return;
        L11_Abgabe.backgroundCtx = backgroundCanvas.getContext('2d');
        L11_Abgabe.foregroundCtx = foregroundCanvas.getContext('2d');
        let horizon = L11_Abgabe.backgroundCtx.canvas.height * L11_Abgabe.goldenCut;
        let posMountains = { x: 0, y: horizon };
        foregroundCanvas.addEventListener("mousedown", handleMouseDown);
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
        let windsock = new L11_Abgabe.Windsock({ x: 350, y: 580 });
        movingObjects.push(windsock);
        for (let index = 0; index < 10; index++) { // 10 Paragleiter erstellen
            let startingPointX = 750 + Math.random() * 20; // Startpunkt zufällig verteilt in der Nähe des Kiosks
            let startingPointY = 490 + Math.random() * 20;
            let color = Math.floor(Math.random() * 360); // Zufällige Farbe
            let saturation = Math.floor(Math.random() * 30) + 90; // Zufällige Sättigung 
            let lightness = Math.floor(Math.random() * 30) + 30; // Zufällige Helligkeit
            let colorHsl = "hsl(" + color + ", " + saturation + "%, " + lightness + "%)"; // Alles zusammenbauen als HSL-String
            let person = new L11_Abgabe.Person({ x: startingPointX, y: startingPointY }, L11_Abgabe.Activity.WALK, colorHsl); // Paragleiter erstellen
            movingObjects.push(person); // Den neuen Paragleiter in die Liste stecken
        }
        ;
        for (let index = 0; index < 10; index++) { // 10 Mosquos erstellen 
            let startingPointX = Math.random() * L11_Abgabe.foregroundCtx.canvas.width; // Startpunkt völlig zufällig
            let startingPointY = Math.random() * L11_Abgabe.foregroundCtx.canvas.height;
            let mosquito = new L11_Abgabe.Mosquito({ x: startingPointX, y: startingPointY }); // ein Mosquo erstellen 
            movingObjects.push(mosquito); // und in die Elonn Mosque liste schieben
        }
        //in den beiden for-Schleifen erstellen wir die 10 Paraglider und Fliegen
        setInterval(update, 40);
    }
    function update() {
        L11_Abgabe.foregroundCtx.clearRect(0, 0, L11_Abgabe.foregroundCtx.canvas.width, L11_Abgabe.foregroundCtx.canvas.height);
        for (let object of movingObjects) {
            object.update();
        }
        L11_Abgabe.updateParaglider = false;
    }
    function handleKeyDown(event) {
        switch (event.key) {
            case Key.UP:
                console.log('Up arrow key pressed');
                if (L11_Abgabe.windStrength < 10) {
                    L11_Abgabe.windStrength++;
                }
                break;
            case Key.DOWN:
                console.log('Down arrow key pressed');
                if (L11_Abgabe.windStrength > 0) {
                    L11_Abgabe.windStrength--;
                }
                break;
            case Key.LEFT:
                console.log('Left arrow key pressed');
                L11_Abgabe.windDirection = WindDirection.LEFT;
                break;
            case Key.RIGHT:
                console.log('Right arrow key pressed');
                L11_Abgabe.windDirection = WindDirection.RIGHT;
                break;
        }
        L11_Abgabe.windStrength_X = L11_Abgabe.windStrength * L11_Abgabe.windDirection;
    }
    function handleMouseDown(event) {
        L11_Abgabe.paragliderPosition_X = event.offsetX - 40;
        L11_Abgabe.paragliderPosition_Y = event.offsetY - 60;
        L11_Abgabe.updateParaglider = true;
        console.log(`Mouse down at coordinates x=${L11_Abgabe.paragliderPosition_X}, y=${L11_Abgabe.paragliderPosition_Y}`);
    }
    function drawSky() {
        console.log("Background");
        let gradient = L11_Abgabe.backgroundCtx.createLinearGradient(0, 0, 0, L11_Abgabe.backgroundCtx.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(L11_Abgabe.goldenCut - 0.1, "white");
        gradient.addColorStop(L11_Abgabe.goldenCut, "HSL(100,80%,20%");
        gradient.addColorStop(1, "HSL(100,90%,40%");
        L11_Abgabe.backgroundCtx.fillStyle = gradient;
        L11_Abgabe.backgroundCtx.fillRect(0, 0, L11_Abgabe.backgroundCtx.canvas.width, L11_Abgabe.backgroundCtx.canvas.height);
        L11_Abgabe.backgroundCtx.restore();
    }
    function drawSun(_position) {
        console.log("sun", _position);
        L11_Abgabe.backgroundCtx.save();
        L11_Abgabe.backgroundCtx.translate(_position.x, _position.y);
        let r1 = 10;
        let r2 = 100;
        let gradient = L11_Abgabe.backgroundCtx.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60,100%,90%,1");
        gradient.addColorStop(1, "HSLA(60,50%,50%,0");
        L11_Abgabe.backgroundCtx.fillStyle = gradient;
        L11_Abgabe.backgroundCtx.arc(0, 0, r2, 0, 2 * Math.PI);
        L11_Abgabe.backgroundCtx.fill();
        L11_Abgabe.backgroundCtx.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 20;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = L11_Abgabe.backgroundCtx.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        L11_Abgabe.backgroundCtx.save();
        L11_Abgabe.backgroundCtx.translate(_position.x, _position.y);
        L11_Abgabe.backgroundCtx.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            L11_Abgabe.backgroundCtx.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            L11_Abgabe.backgroundCtx.translate(x, y);
            L11_Abgabe.backgroundCtx.fill(particle);
            L11_Abgabe.backgroundCtx.restore();
        }
        L11_Abgabe.backgroundCtx.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains", _position, _min, _max);
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        L11_Abgabe.backgroundCtx.save();
        L11_Abgabe.backgroundCtx.translate(_position.x, _position.y);
        L11_Abgabe.backgroundCtx.beginPath();
        L11_Abgabe.backgroundCtx.moveTo(0, 0);
        L11_Abgabe.backgroundCtx.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L11_Abgabe.backgroundCtx.lineTo(x, y);
        } while (x < L11_Abgabe.backgroundCtx.canvas.width);
        L11_Abgabe.backgroundCtx.lineTo(x, 0);
        L11_Abgabe.backgroundCtx.closePath();
        let gradient = L11_Abgabe.backgroundCtx.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        L11_Abgabe.backgroundCtx.fillStyle = gradient;
        L11_Abgabe.backgroundCtx.fill();
        L11_Abgabe.backgroundCtx.restore();
    }
    function drawLandingArea(_position, _radiusX, _radiusY) {
        L11_Abgabe.backgroundCtx.save();
        L11_Abgabe.backgroundCtx.translate(_position.x, _position.y);
        L11_Abgabe.backgroundCtx.scale(_radiusX / _radiusY, 1);
        L11_Abgabe.backgroundCtx.fillStyle = "green";
        L11_Abgabe.backgroundCtx.beginPath();
        L11_Abgabe.backgroundCtx.arc(0, 0, _radiusY, 0, 2 * Math.PI);
        L11_Abgabe.backgroundCtx.closePath();
        L11_Abgabe.backgroundCtx.fill();
        L11_Abgabe.backgroundCtx.restore();
    }
    function drawTriangle(_position) {
        L11_Abgabe.backgroundCtx.save();
        L11_Abgabe.backgroundCtx.translate(_position.x, _position.y);
        L11_Abgabe.backgroundCtx.beginPath();
        L11_Abgabe.backgroundCtx.moveTo(0, 0); // Erster Punkt des Dreiecks
        L11_Abgabe.backgroundCtx.lineTo(400, 0); // Zweiter Punkt des Dreiecks
        L11_Abgabe.backgroundCtx.lineTo(0, -200); // Dritter Punkt des Dreiecks
        L11_Abgabe.backgroundCtx.closePath(); // Schließt den Pfad und führt zum ersten Punkt zurück
        L11_Abgabe.backgroundCtx.fillStyle = "grey";
        L11_Abgabe.backgroundCtx.fill();
        L11_Abgabe.backgroundCtx.restore();
    }
    function drawKiosk(_position) {
        L11_Abgabe.backgroundCtx.save();
        L11_Abgabe.backgroundCtx.translate(_position.x, _position.y);
        L11_Abgabe.backgroundCtx.beginPath();
        L11_Abgabe.backgroundCtx.moveTo(0, 0); //1
        L11_Abgabe.backgroundCtx.lineTo(70, 0); //2
        L11_Abgabe.backgroundCtx.lineTo(70, -50); //3
        L11_Abgabe.backgroundCtx.lineTo(0, -100); //4
        L11_Abgabe.backgroundCtx.fillStyle = "brown";
        L11_Abgabe.backgroundCtx.fill();
        L11_Abgabe.backgroundCtx.closePath();
        L11_Abgabe.backgroundCtx.beginPath();
        L11_Abgabe.backgroundCtx.moveTo(80, -50);
        L11_Abgabe.backgroundCtx.lineTo(-10, -100);
        L11_Abgabe.backgroundCtx.lineWidth = 10;
        L11_Abgabe.backgroundCtx.strokeStyle = "red";
        L11_Abgabe.backgroundCtx.stroke();
        L11_Abgabe.backgroundCtx.closePath();
        L11_Abgabe.backgroundCtx.restore();
    }
    function drawTree(_position) {
        console.log("Tree", _position);
        L11_Abgabe.backgroundCtx.save();
        L11_Abgabe.backgroundCtx.translate(_position.x, _position.y);
        L11_Abgabe.backgroundCtx.beginPath();
        L11_Abgabe.backgroundCtx.fillStyle = "brown";
        L11_Abgabe.backgroundCtx.fillRect(_position.x, _position.y, 15, 100);
        L11_Abgabe.backgroundCtx.closePath();
        L11_Abgabe.backgroundCtx.beginPath();
        L11_Abgabe.backgroundCtx.arc(_position.x + 7, _position.y - 30, 40, 0, 2 * Math.PI);
        L11_Abgabe.backgroundCtx.fillStyle = "green";
        L11_Abgabe.backgroundCtx.fill();
        L11_Abgabe.backgroundCtx.closePath();
        L11_Abgabe.backgroundCtx.restore();
    }
})(L11_Abgabe || (L11_Abgabe = {}));
//# sourceMappingURL=L11_Abgabe.js.map