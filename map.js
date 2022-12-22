//map create a row array by performing some operation on each array element
//this method does not change original array
let array = [43, 23, 21];
array.map((value) => {
  console.log(value);
});
console.log(array); //this will return new array row

//value will give array element
//index give values indexs
//array contains element
let arr = array.map((value, index, array) => {
  console.log(value, index, array);
  return value + index; //this will add value and index
});
console.log(arr); //return operation perfrom array
