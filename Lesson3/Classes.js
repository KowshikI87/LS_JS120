function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.getArea = function() {
  return this.length * this.width;
};

let rec = new Rectangle(10, 5);
console.log(typeof Rectangle);         // function
console.log(rec instanceof Rectangle); // true
console.log(rec.constructor);          // [Function: Rectangle]
console.log(rec.getArea());            // 50