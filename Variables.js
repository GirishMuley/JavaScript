//variables in js ex: var let and const
var a = 10; // var variable is global variable used in older vserion before ES6
var a = "p"; // var variable is not good practice to use in your code because it can couse a error
console.log(a);
let b = "jack"; //let allows you to delcare variables that are limited to the scope of a block statement, or expression on which it is used, unlike the var keyword.
console.log(b);
{
  let b = "jack form block";
  console.log(b);
}
const pincode = 431203; //the const declaration creates block-sccoped constants
// pincode = 454545; throws an error because constant cannot be changed
console.log(pincode);
let foo = 42;
foo = "Girish";
console.log(foo);
