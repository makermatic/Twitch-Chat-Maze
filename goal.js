class Goal {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }

    display() {
        image(goalImage, this.x, this.y, this.size, this.size)
    }
}