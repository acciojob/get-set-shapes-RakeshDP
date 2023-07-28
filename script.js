//complete this code
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  // Getters for width and height
  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  // Setters for width and height
  set width(value) {
    this._width = value;
  }

  set height(value) {
    this._height = value;
  }

  // Method to calculate the area of the rectangle
  getArea() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side); // Call the constructor of the parent class (Rectangle) with the side as width and height
  }

  // Method to calculate the perimeter of the square
  getPerimeter() {
    return 4 * this._width; // In a square, all sides are equal, so perimeter = 4 * side
  }
}

const rectangle = new Rectangle(4,5);
console.log(rectangle.getArea());

const square = new Square(6);
console.log(square.getPerimeter());

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
