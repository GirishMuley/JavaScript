//reduce an array of single value . passing in the return value from the calculation on the preceding element

let array = [1, 2, 3, 4, 5, 2, 1];
let newArray = array.reduce((val1, val2) => {
  return val1 + val2;
});
console.log(newArray);

//second way

const reduce_fun = (value1, value2) => {
  return value1 + value2;
};

let result = array.reduce(reduce_fun);
console.log(result);
