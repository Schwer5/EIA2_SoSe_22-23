"use strict";
var A081;
(function (A081) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let canvas = document.getElementById("myCanvas");
        let context = canvas.getContext("2d");
        function randomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        function drawRandomLine() {
            context.beginPath();
            context.moveTo(randomInt(0, canvas.width), randomInt(0, canvas.height));
            context.lineTo(randomInt(0, canvas.width), randomInt(0, canvas.height));
            context.strokeStyle = `rgba(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)}, ${Math.random()})`;
            context.lineWidth = randomInt(1, 10);
            context.fill();
        }
        function drawRandomCircle() {
            context.beginPath();
            context.arc(randomInt(0, canvas.width), randomInt(0, canvas.height), randomInt(1, 100), 0, 2 * Math.PI);
            context.fillStyle = `rgba(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)}, ${Math.random()})`;
            context.fill();
        }
        function drawRandomRectangle() {
            context.beginPath();
            context.rect(randomInt(0, canvas.width), randomInt(0, canvas.height), randomInt(1, 150), randomInt(1, 150));
            context.fillStyle = `rgba(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)}, ${Math.random()})`;
            context.fill();
        }
        function generateArt() {
            for (let i = 0; i < 100; i++) {
                let shape = randomInt(1, 3);
                if (shape === 1) {
                    drawRandomLine();
                }
                else if (shape === 2) {
                    drawRandomCircle();
                }
                else {
                    drawRandomRectangle();
                }
            }
        }
        generateArt();
    }
    ;
})(A081 || (A081 = {}));
//# sourceMappingURL=A08.1_Canvas.js.map