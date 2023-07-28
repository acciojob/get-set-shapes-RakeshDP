//complete this code
class Rectangle {
	constructor(width,height){
		this.width=width;
		this.height=height;
	}
	get width(){
		return this.width;
	}
	get height(){
		return this.height;
	}
	// Setters for width and height
	set width(value) {
	this._width = value;
	}
	
	set height(value) {
	this._height = value;
	}

	getArea(){
		return this.width * this.height;
	}
}

class Square extends Rectangle {
	constructor(side){
		super(side,side);
	}
	getPerimeter(){
		return 4 * this.width;
	}
}
const rectangle = new Rectangle(4,5);
console.log(rectangle.getArea());

const square = new Square(6);
console.log(square.getPerimeter());

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
