namespace A081 {
    window.addEventListener("load", handleLoad);

function handleLoad(){
        const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
        const ctx = canvas.getContext("2d")!;

        function randomInt(min: number, max: number): number {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        function drawRandomLine() {
            ctx.beginPath();
            ctx.moveTo(randomInt(0, canvas.width), randomInt(0, canvas.height));
            ctx.lineTo(randomInt(0, canvas.width), randomInt(0, canvas.height));
            ctx.strokeStyle = `rgba(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)}, ${Math.random()})`;
            ctx.lineWidth = randomInt(1, 10);
            ctx.stroke();
        }

        function drawRandomCircle() {
            ctx.beginPath();
            ctx.arc(randomInt(0, canvas.width), randomInt(0, canvas.height), randomInt(1, 100), 0, 2 * Math.PI);
            ctx.fillStyle = `rgba(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)}, ${Math.random()})`;
            ctx.fill();
        }

        function drawRandomRectangle() {
            ctx.beginPath();
            ctx.rect(randomInt(0, canvas.width), randomInt(0, canvas.height), randomInt(1, 150), randomInt(1, 150));
            ctx.fillStyle = `rgba(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)}, ${Math.random()})`;
            ctx.fill();
        }

        function generateArt() {
            for (let i = 0; i < 100; i++) {
                const shape = randomInt(1, 3);

                if (shape === 1) {
                    drawRandomLine();
                } else if (shape === 2) {
                    drawRandomCircle();
                } else {
                    drawRandomRectangle();
                }
            }
        }

        generateArt();
    
    };
}

