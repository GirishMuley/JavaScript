//create an array of number and take input form the user to add number to this array
let arr = [1, 2, 3, 4, 5, 6, 7];
let a = 85;
arr.push(a);
console.log(arr);
console.log("----------------------------------------------------------");
//keep adding number to the array in until the  0 is added to the array

// let arr2 = [1, 2, 3, 4, 5, 6];
// let b;
// do {
//   b = prompt("Enter a numer");
//   b = Number.parseInt(b);
//   arr2.push(b);
// } while (b != 0);
// console.log(arr2);

//filetr for the divisible bt 10 from  a given array
console.log("----------------------------------------------------------");
let arr3 = [10, 20, 45, 88, 99, 50];
let newArray = arr3.filter((value) => {
  return value % 10 == 0;
});
console.log(newArray);
console.log("----------------------------------------------------------");
//create an array of square of given number
let arr4 = [2, 4, 50, 88];
let squareArray = arr4.map((value) => {
  return value * value;
});
console.log(squareArray);
console.log("----------------------------------------------------------");
//use reduce to calculate factorial of a given number from an array of first n natural nubers(n beging the number whose factorial needs to be calculated)
let arr5 = [1, 2, 3, 4, 5];
let factorialArray = arr5.reduce((val1, val2) => {
  return val1 * val2;
});
console.log(factorialArray);
