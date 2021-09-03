class Player {
    constructor(x, y, size, moveSpeed) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.moveSpeed = moveSpeed;
    }

    display() {
        image(playerImage, this.x, this.y, this.size, this.size)
    }

    left() {
        this.x = this.x - this.moveSpeed;
    }

    right() {
        this.x = this.x + this.moveSpeed;
    }

    up() {
        this.y = this.y - this.moveSpeed;
    }

    down() {
        this.y = this.y + this.moveSpeed;
    }
}