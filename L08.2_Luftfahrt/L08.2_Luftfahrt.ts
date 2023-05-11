namespace L082 {
    interface Vector {
        x: number;
        y: number;
    }
    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    let goldenCut: number = 0.62;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        let horizon: number = crc2.canvas.height * goldenCut;
        
        

        let posMountains: Vector = { x: 0, y: horizon };


        drawSky();
        drawSun({ x: 100, y: 75 });
        drawCloud({ x: 500, y: 125 }, { x: 250, y: 75 });
        drawMountains(posMountains, 75, 200, "grey", "white");
        drawMountains(posMountains, 50, 150, "grey", "lightgrey");
        drawLandingArea();
        drawTriangle({ x: 0, y: 440 });
        drawParagliders();
        drawInsects();
    }


    function drawSky(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(goldenCut-0.1, "white");
        gradient.addColorStop(goldenCut, "HSL(100,80%,20%");
        gradient.addColorStop(1, "HSL(100,90%,40%");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height)
    }

    function drawSun(_position: Vector): void {
        console.log("sun", _position);

        let r1: number = 10;
        let r2: number = 100;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(60,100%,90%,1");
        gradient.addColorStop(1, "HSLA(60,50%,50%,0");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI)
        crc2.fill();
        crc2.restore();

    }

    function drawCloud(_position: Vector, _size: Vector): void {
        console.log("Cloud", _position, _size);

        let nParticles: number = 20;
        let radiusParticle: number = 50;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }

    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
       
            console.log("Mountains", _position, _min, _max);
            let stepMin: number = 50;
            let stepMax: number = 150;
            let x: number = 0;
    
            crc2.save();
            crc2.translate(_position.x, _position.y);
    
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(0, -_max);
    
            do {
                x += stepMin + Math.random() * (stepMax - stepMin);
                let y: number = -_min - Math.random() * (_max - _min);
    
                crc2.lineTo(x, y);
            } while (x < crc2.canvas.width);
    
            crc2.lineTo(x, 0);
            crc2.closePath();
    
            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
            gradient.addColorStop(0, _colorLow);
            gradient.addColorStop(0.7, _colorHigh);
    
            crc2.fillStyle = gradient;
            crc2.fill();
    
            crc2.restore();
        }

        function drawLandingArea(){
            crc2.beginPath();
            crc2.ellipse(400, 500, 150, 50,0, 0, 2 * Math.PI);
            crc2.fillStyle="green";
            crc2.fill();
        }

        function drawTriangle(_position: Vector): void {
            crc2.save();
        crc2.translate(_position.x, _position.y);
            crc2.beginPath();
            crc2.moveTo(0, 0); // Erster Punkt des Dreiecks
            crc2.lineTo(400, 0); // Zweiter Punkt des Dreiecks
            crc2.lineTo(0, -200); // Dritter Punkt des Dreiecks
            crc2.closePath(); // Schließt den Pfad und führt zum ersten Punkt zurück
            crc2.fillStyle="grey";
            crc2.fill();
        }

    
    function drawParagliders() {
        // Hier können Sie den Code zum Zeichnen der Paraglider hinzufügen
    }

    function drawInsects() {
        // Hier können Sie den Code zum Zeichnen der Insekten hinzufügen
    }
}


