// let a = setTimeout(function () {
//   alert("I am inside of setTimeout");
// }, 5000);

// console.log(a);

// let b = prompt("Do you want to run the seTimeout?");
// if ("n" == b) {
//   clearTimeout(a);
// }

const sum = (a, b, c) => {
  console.log("I am running" + (a + b + c));
};

setTimeout(sum, 2000, 1, 2, 3);

// setInterval(function () {
//   alert("I am setInterval");
// }, 2000);

// const message = (a, b) => {
//   console.log("add is " + (a + b));
// };

// setInterval(message, 2000, 1, 2);
