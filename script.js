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
	getArea(){
		const AreaRec=(this.width * this.height);
		return AreaRec;
	}
}

class Square extends Rectangle {
	constructor(side){
		this.side=side;
	}
	getPerimeter(){
		const PerSquare=(4 * this.side);
		return PerSquare;
	}
}
const rectangle = new Rectangle(4,5);
console.log(rectangle.getArea());

const square = new Square(6);
console.log(square.getPerimeter());

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
