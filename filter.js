//filter an array with values that passes a test.create a new array.

let array = [43, 23, 21, 2, 3, 4];

let arr = array.filter((value) => {
  return value < 10;
});
console.log(arr); //return condion true values
