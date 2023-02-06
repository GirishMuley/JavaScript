//create a javascript class to create a complete number. create a constructor to set the real and the compare
//write a method to add two complex number in the above class
//use getters and stters to set and get the real and imaginary parts of the complex number
class Complex {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }
  add(num) {
    this.real = this.real + num.real;
    this.imaginary = this.imaginary + num.imaginary;
  }
  get real() {
    return this._real;
  }
  get imaginary() {
    return this._imaginary;
  }
  set imaginary(newImaginary) {
    this._imaginary = newImaginary;
  }
  set real(newReal) {
    this._real = newReal;
  }
}

let a = new Complex(2, 4);
console.log(a.real, a.imaginary);
a.real = 10;
a.imaginary = 10;
let b = new Complex(6, 2);
a.add(b);
console.log(`${a.real}+${a.imaginary}i`);

//create a class student from a class human override a method & set changes
//see if student is an infance of human using instanceof keyword
class Human {
  constructor(name, favFood) {
    this.name = name;
    this.favFood = favFood;
  }
  walk() {
    console.log(this.name + " Human is walking");
  }
}

class Student extends Human {
  walk() {
    console.log(this.name + " Student is walking");
  }
}

let o = new Student("Harry", "Bhindi");
o.walk();

console.log(o instanceof Human);
