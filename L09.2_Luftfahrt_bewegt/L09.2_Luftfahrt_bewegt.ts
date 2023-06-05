// Name:<Pia Schwer>
// Matrikel: <272266>
// Datum: <15.04.23>
// Zusammenarbeit mit Theresa Hauser, Marie Eckl
// Quellen: Stack Overflow, Developer Mozilla,Github Jirka, Vorherige Aufgabe(n) aus EIA1

namespace L092 {
    export interface Vector {
        x: number;
        y: number;
    }
    window.addEventListener("load", handleLoad);
    export let backgroundCtx: CanvasRenderingContext2D;
    export let foregroundCtx: CanvasRenderingContext2D;
    export let goldenCut: number = 0.62;

    let paragliders: Paraglider[] = [];
    let mosquitos: Mosquito[] = [];

    function handleLoad(_event: Event): void {
        let backgroundCanvas: HTMLCanvasElement | null = document.querySelector("#background") as HTMLCanvasElement;
        let foregroundCanvas: HTMLCanvasElement | null = document.querySelector("#foreground") as HTMLCanvasElement;
        if (!backgroundCanvas)
            return;
        if (!foregroundCanvas)
            return;
        backgroundCtx = <CanvasRenderingContext2D>backgroundCanvas.getContext('2d');
        foregroundCtx = <CanvasRenderingContext2D>foregroundCanvas.getContext('2d');
        let horizon: number = backgroundCtx.canvas.height * goldenCut;
        let posMountains: Vector = { x: 0, y: horizon };

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

        for (let index: number = 0; index < 10; index++) {
            let startingPointX = 750+Math.random()*20;
            let startingPointY = 490+Math.random()*20;

            let color = Math.floor(Math.random() * 360);
            let saturation = Math.floor(Math.random() * 30) + 90;
            let lightness = Math.floor(Math.random() * 30) + 30;

            let colorHsl: string = "hsl(" + color + ", " + saturation + "%, " + lightness + "%)";

            let paraglider: Paraglider = new Paraglider({ x:startingPointX, y: startingPointY }, Activity.WALK, colorHsl);
            paragliders.push(paraglider);
        };

        for (let index: number = 0; index < 10; index++) {
            let startingPointX = Math.random()*foregroundCtx.canvas.width;
            let startingPointY = Math.random()*foregroundCtx.canvas.height;
            let mosquito: Mosquito= new Mosquito({ x:startingPointX, y: startingPointY })
            mosquitos.push(mosquito);
        }

        setInterval(update, 40);
    }

    function update(): void {
        foregroundCtx.clearRect(0, 0, foregroundCtx.canvas.width, foregroundCtx.canvas.height);
        for (let paraglider of paragliders) {
            paraglider.update();
        }
        for (let mosquito of mosquitos) {
            mosquito.update();
        }
    }


    function drawSky(): void {
        console.log("Background");

        let gradient: CanvasGradient = backgroundCtx.createLinearGradient(0, 0, 0, backgroundCtx.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(goldenCut - 0.1, "white");
        gradient.addColorStop(goldenCut, "HSL(100,80%,20%");
        gradient.addColorStop(1, "HSL(100,90%,40%");

        backgroundCtx.fillStyle = gradient;
        backgroundCtx.fillRect(0, 0, backgroundCtx.canvas.width, backgroundCtx.canvas.height)
        backgroundCtx.restore();
    }

    function drawSun(_position: Vector): void {
        console.log("sun", _position);

        backgroundCtx.save();
        backgroundCtx.translate(_position.x, _position.y);

        let r1: number = 10;
        let r2: number = 100;
        let gradient: CanvasGradient = backgroundCtx.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(60,100%,90%,1");
        gradient.addColorStop(1, "HSLA(60,50%,50%,0");

        backgroundCtx.fillStyle = gradient;
        backgroundCtx.arc(0, 0, r2, 0, 2 * Math.PI)
        backgroundCtx.fill();
        backgroundCtx.restore();
    }

    function drawCloud(_position: Vector, _size: Vector): void {
        console.log("Cloud", _position, _size);


        let nParticles: number = 20;
        let radiusParticle: number = 50;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = backgroundCtx.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        backgroundCtx.save();
        backgroundCtx.translate(_position.x, _position.y);
        backgroundCtx.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            backgroundCtx.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            backgroundCtx.translate(x, y);
            backgroundCtx.fill(particle);
            backgroundCtx.restore();
        }
        backgroundCtx.restore();
    }

    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {

        console.log("Mountains", _position, _min, _max);

        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;

        backgroundCtx.save();
        backgroundCtx.translate(_position.x, _position.y);

        backgroundCtx.beginPath();
        backgroundCtx.moveTo(0, 0);
        backgroundCtx.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            backgroundCtx.lineTo(x, y);
        } while (x < backgroundCtx.canvas.width);

        backgroundCtx.lineTo(x, 0);
        backgroundCtx.closePath();

        let gradient: CanvasGradient = backgroundCtx.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        backgroundCtx.fillStyle = gradient;
        backgroundCtx.fill();

        backgroundCtx.restore();
    }

    function drawLandingArea(_position: Vector, _radiusX: number, _radiusY: number): void {
        backgroundCtx.save();
        backgroundCtx.translate(_position.x, _position.y);

        backgroundCtx.scale(_radiusX / _radiusY, 1)
        backgroundCtx.fillStyle = "green";
        backgroundCtx.beginPath();
        backgroundCtx.arc(0, 0, _radiusY, 0, 2 * Math.PI);
        backgroundCtx.closePath();
        backgroundCtx.fill();
        backgroundCtx.restore();
    }

    function drawTriangle(_position: Vector): void {
        backgroundCtx.save();
        backgroundCtx.translate(_position.x, _position.y);
        backgroundCtx.beginPath();
        backgroundCtx.moveTo(0, 0); // Erster Punkt des Dreiecks
        backgroundCtx.lineTo(400, 0); // Zweiter Punkt des Dreiecks
        backgroundCtx.lineTo(0, -200); // Dritter Punkt des Dreiecks
        backgroundCtx.closePath(); // Schließt den Pfad und führt zum ersten Punkt zurück
        backgroundCtx.fillStyle = "grey";
        backgroundCtx.fill();
        backgroundCtx.restore();
    }

    function drawKiosk(_position: Vector): void {
        backgroundCtx.save();
        backgroundCtx.translate(_position.x, _position.y);
        backgroundCtx.beginPath();
        backgroundCtx.moveTo(0, 0); //1
        backgroundCtx.lineTo(70, 0);//2
        backgroundCtx.lineTo(70, -50); //3
        backgroundCtx.lineTo(0, -100); //4
        backgroundCtx.fillStyle = "brown";
        backgroundCtx.fill();
        backgroundCtx.closePath();

        backgroundCtx.beginPath();
        backgroundCtx.moveTo(80, -50)
        backgroundCtx.lineTo(-10, -100);
        backgroundCtx.lineWidth = 10;
        backgroundCtx.strokeStyle = "red";
        backgroundCtx.stroke();
        backgroundCtx.closePath();

        backgroundCtx.restore();
    }

    function drawWaitingPersons(_position: Vector): void {
        console.log("Mountains");
        backgroundCtx.save();
        backgroundCtx.translate(_position.x, _position.y);
        let color = Math.floor(Math.random() * 360);
        let saturation = Math.floor(Math.random() * 30) + 90;
        let lightness = Math.floor(Math.random() * 30) + 30;

        //Head of WaitingPersons
        backgroundCtx.beginPath();
        backgroundCtx.arc(_position.x, _position.y, 8, 0, 2 * Math.PI);
        backgroundCtx.fillStyle = "HSL(25,75%,70%)";
        backgroundCtx.fill();
        backgroundCtx.closePath()

        //Body of WaitingPiapersons
        backgroundCtx.beginPath();
        backgroundCtx.moveTo(_position.x, _position.y + 5);
        backgroundCtx.lineTo(_position.x + 12, _position.y + 36);
        backgroundCtx.lineTo(_position.x - 12, _position.y + 36);
        backgroundCtx.lineTo(_position.x, _position.y + 5);
        backgroundCtx.fillStyle = "hsl(" + color + ", " + saturation + "%, " + lightness + "%)";
        backgroundCtx.fill();

        backgroundCtx.restore();
    }

    function drawParaglider(_position: Vector): void {
        console.log("paraglider")

        let color = Math.floor(Math.random() * 360);
        let saturation = Math.floor(Math.random() * 30) + 90;
        let lightness = Math.floor(Math.random() * 30) + 30;

        let color2 = Math.floor(Math.random() * 360);
        let saturation2 = Math.floor(Math.random() * 50) + 70;
        let lightness2 = Math.floor(Math.random() * 40) + 20;


        //Body of Paraglider
        backgroundCtx.beginPath();
        backgroundCtx.moveTo(_position.x, _position.y + 5);
        backgroundCtx.lineTo(_position.x + 12, _position.y + 36);
        backgroundCtx.lineTo(_position.x - 12, _position.y + 36);
        backgroundCtx.lineTo(_position.x, _position.y + 5);
        backgroundCtx.fillStyle = "hsl(" + color + ", " + saturation + "%, " + lightness + "%)";
        backgroundCtx.fill();

        //Head of Paraglider 
        backgroundCtx.beginPath();
        backgroundCtx.arc(_position.x, _position.y, 8, 0, 2 * Math.PI);
        backgroundCtx.fillStyle = "HSL(25,75%,70%)";
        backgroundCtx.fill();
        backgroundCtx.closePath();

        //Ropes
        backgroundCtx.beginPath();
        backgroundCtx.moveTo(_position.x + 1, _position.y + 11);
        backgroundCtx.lineTo(_position.x + 35, _position.y - 20);
        backgroundCtx.strokeStyle = "black"
        backgroundCtx.stroke();
        backgroundCtx.closePath();

        backgroundCtx.beginPath();
        backgroundCtx.moveTo(_position.x - 1, _position.y + 11);
        backgroundCtx.lineTo(_position.x - 35, _position.y - 20);
        backgroundCtx.strokeStyle = "black"
        backgroundCtx.stroke();
        backgroundCtx.closePath();

        //Gleitschirm
        backgroundCtx.beginPath();
        backgroundCtx.ellipse(_position.x, _position.y - 25, 40, 12, 0, 0, Math.PI * 2);
        backgroundCtx.fillStyle = "hsl(" + color2 + ", " + saturation2 + "%, " + lightness2 + "%)";
        backgroundCtx.fill();
        backgroundCtx.closePath();
        backgroundCtx.restore();

    };




    function drawTree(_position: Vector): void {
        console.log("Tree", _position);
        backgroundCtx.save();
        backgroundCtx.translate(_position.x, _position.y);

        backgroundCtx.beginPath();
        backgroundCtx.fillStyle = "brown";
        backgroundCtx.fillRect(_position.x, _position.y, 15, 100);
        backgroundCtx.closePath();


        backgroundCtx.beginPath();
        backgroundCtx.arc(_position.x + 7, _position.y - 30, 40, 0, 2 * Math.PI);
        backgroundCtx.fillStyle = "green";
        backgroundCtx.fill();
        backgroundCtx.closePath();
        backgroundCtx.restore();
    }

    function drawWindSock(_position: Vector): void {
        console.log("WindSock", _position);
        backgroundCtx.save();
        backgroundCtx.translate(_position.x, _position.y);

        // Draw the pole
        backgroundCtx.beginPath();
        backgroundCtx.moveTo(0, 0);
        backgroundCtx.lineTo(0, -80);
        backgroundCtx.strokeStyle = "black";
        backgroundCtx.lineWidth = 2;
        backgroundCtx.stroke();

        // Draw the windsock
        backgroundCtx.beginPath();
        backgroundCtx.ellipse(30, -80, 30, 10, Math.PI, 0, 1.75 * Math.PI);
        backgroundCtx.fillStyle = "red";
        backgroundCtx.fill();
        backgroundCtx.closePath();

        backgroundCtx.beginPath();
        backgroundCtx.ellipse(30, -80, 25, 5, Math.PI, 0, 1.75 * Math.PI);
        backgroundCtx.fillStyle = "white";
        backgroundCtx.fill();
        backgroundCtx.closePath();

        backgroundCtx.restore();
    }
}

