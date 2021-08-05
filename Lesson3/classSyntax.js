class Rectangle {
  //static property
  static description = 'A rectangle is a shape with 4 sides';

  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  //static methods
  static getDescription() {
    return 'A rectangle is a shape with 4 sides';
  }

  //instance methods
  getArea() {
    return this.length * this.width;
  }
}

//Adding static property
Rectangle.description2 = "A rectangle is a shape with 4 sides";

