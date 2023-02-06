// //following two lines will run successfully due to javascript hosting
// console.log(a);
// greet();
// function greet() {
//   console.log("Good morning");
// }
// var a = 9; //Declaration hoisted to the top but initializtion is not
// console.log(a);

console.log(a);
greet();
var greet = function () {
  console.log("Good morning");
};
var a = 9;
console.log(a);
