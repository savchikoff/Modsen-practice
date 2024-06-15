class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

const rectangle = new Rectangle(5, 10);

console.log("The area of a rectangle:", rectangle.calculateArea());
console.log("The perimeter of a rectangle:", rectangle.calculatePerimeter());