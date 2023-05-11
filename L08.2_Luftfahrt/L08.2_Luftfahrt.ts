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
        let streetWidthBack: number = 25;
        let streetWidthFront: number = 100;
        let treesOffsetBack: number = 15;
        let treesOffsetFront: number = 100;

        let posMountains: Vector = { x: 0, y: horizon };
        let posStreet: Vector = { x: crc2.canvas.width / 2, y: horizon };
        let posTreesStart: Vector = { x: posStreet.x - streetWidthBack / 2 - treesOffsetBack, y: horizon };
        let posTreesEnd: Vector = { x: crc2.canvas.width / 2 - streetWidthFront / 2 - treesOffsetFront, y: crc2.canvas.height };


        drawSky();
        drawSun({ x: 100, y: 75 });
        drawCloud({ x: 500, y: 125 }, { x: 250, y: 75 });
        drawMountains(posMountains, 75, 200, "grey", "white");
        drawMountains(posMountains, 50, 150, "grey", "lightgrey");
        drawLandingArea(posStreet, streetWidthBack, streetWidthFront);
        drawTrees(8, posTreesStart, posTreesEnd, 0.1, 0.37, 1.4);
        posTreesStart.x = posStreet.x + streetWidthBack / 2 + treesOffsetBack;
        posTreesEnd.x = posTreesEnd.x + streetWidthFront + 2 * treesOffsetFront;
        drawTrees(8, posTreesStart, posTreesEnd, 0.1, 0.37, 1.4);
        drawParagliders();
        drawInsects();
    }


    function drawSky(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(goldenCut, "white");
        gradient.addColorStop(1, "HSL(100,80%,30%");

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
    


    function drawLandingArea(_position: Vector, _widthBack: number, _widthFront: number): void {
        console.log("Street", _position, _widthBack, _widthFront);
        crc2.beginPath();
        crc2.moveTo(_position.x + _widthBack / 2, _position.y);
        crc2.lineTo(crc2.canvas.width / 2 + _widthFront / 2, crc2.canvas.height);
        crc2.lineTo(crc2.canvas.width / 2 - _widthFront / 2, crc2.canvas.height);
        crc2.lineTo(_position.x - _widthBack / 2, _position.y);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, _position.y, 0, crc2.canvas.height);
        gradient.addColorStop(0, "darkgrey");
        gradient.addColorStop(0.6, "black ");

        crc2.fillStyle = gradient;
        crc2.fill();
    }

    function drawTrees(_nTrees: number, _posStart: Vector, _posEnd: Vector, _minScale: number, _stepPos: number, _stepScale: number): void {
        console.log("Trees", _posStart, _posEnd);
        let transform: DOMMatrix = crc2.getTransform();
        let step: Vector = {
            x: (_posEnd.x - _posStart.x) * _stepPos,
            y: (_posEnd.y - _posStart.y) * _stepPos
        };

        crc2.translate(_posStart.x, _posStart.y);
        crc2.scale(_minScale, _minScale);

        do {
            drawTree();

            crc2.translate(step.x, step.y);
            crc2.scale(_stepScale, _stepScale);

        } while (--_nTrees > 0);

        crc2.setTransform(transform);
    }

    function drawTree(): void {
        console.log("Tree");
        let nBranches: number = 50;
        let maxRadius: number = 60;
        let branch: Path2D = new Path2D();
        branch.arc(0, 0, maxRadius, 0, 2 * Math.PI);

        crc2.fillStyle = "brown";
        crc2.fillRect(0, 0, 20, -200);

        crc2.save();
        crc2.translate(0, -120);

        do {
            let y: number = Math.random() * 350;
            let size: number = 1 - y / 700;
            let x: number = (Math.random() - 0.5) * 2 * maxRadius;

            crc2.save();
            crc2.translate(0, -y);
            crc2.scale(size, size);
            crc2.translate(x, 0);

            let colorAngle: number = 120 - Math.random() * 60;
            let color: string = "HSLA(" + colorAngle + ", 50%, 30%, 0.5)";

            crc2.fillStyle = color;
            crc2.fill(branch);

            crc2.restore();
        } while (--nBranches > 0);
        crc2.restore();
    }


    function drawParagliders() {
        // Hier können Sie den Code zum Zeichnen der Paraglider hinzufügen
    }

    function drawInsects() {
        // Hier können Sie den Code zum Zeichnen der Insekten hinzufügen
    }
}


