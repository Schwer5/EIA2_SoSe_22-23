"use strict";
var canvas;
(function (canvas_1) {
    window.addEventListener("load", function () {
        let canvas = document.querySelector("canvas");
        let crc2 = canvas.getContext("2d");
        crc2.beginPath();
        crc2.arc(100, 100, 20, 0, 1.5 * Math.PI);
        crc2.closePath();
        crc2.stroke();
    });
})(canvas || (canvas = {}));
//# sourceMappingURL=Canvas01.js.map