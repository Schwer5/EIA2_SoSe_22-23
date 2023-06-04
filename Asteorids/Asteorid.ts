namespace L09_Asteroids {

    export class Asteroid { // muss exportiert werden weil wir sie im Main.ts brauchen 
        position: Vector;
        velocity: Vector;
        type: number;
        size: number;

        constructor(_size: number, _position?: Vector) {
            console.log("Asteroid constructor");

            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 0);
                
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200); //100/s Pixel bis 200/s Pixel soll er fliegen können

            this.type = Math.floor(Math.random() * 4); //floor schneidet Nachkommastellen ab
            this.size = _size;
        }

        move(_timeslice: number): void { //soll timeslice entgegennehmen
            // console.log("Asteroid move");
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }

        draw(): void {
            // console.log("Asteroid draw");
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.translate(-50, -50);
            crc2.stroke(asteroidPaths[this.type]);
            crc2.restore();
        }

        isHit(_hotspot: Vector): boolean {
            let hitsize: number = 50 * this.size;
            let difference: Vector = new Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }
    }
}