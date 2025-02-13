class Projectile {
    constructor(x, y, angle, sign, playerXMove, playerYMove, projectileImage) {
        this.x = x;
        this.y = y;
        this.size = 5;
        this.collision = true;
        this.speed = 10;
        this.angle = angle;
        this.sign = sign;
        this.extraXMove = playerXMove;
        this.extraYMove = playerYMove;
		//this.image = loadImage(projectileImage);
		this.image = projectileImage;
    }

    drawProjectile() {
        fill(255, 255, 255);
        imageMode(CENTER)
        image(this.image,this.x,this.y,this.size+10,this.size+10);
        //ellipse(this.x, this.y, this.size, this.size);
    }

    outOfRange(mapX, mapY) {
		return this.x > mapX - this.size / 2 || this.x < 0 + this.size / 2 ||
               this.y > mapY - this.size / 2 || this.y < 0 + this.size / 2;
    }

    moveProjectile() {
        //this works, dont know how
        this.y += this.speed * sin(-this.angle) * this.sign + this.extraYMove;
        this.x += this.speed * cos(-this.angle) * this.sign + this.extraXMove;
    }
}

module.exports =  Projectile;