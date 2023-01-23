let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Value : 1");
  }, 1000);
});
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Value : 2");
  }, 2000);
});
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Value : 3");
  }, 3000);
});
let p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Value : 4");
    reject(new Error("Error"));
  }, 4000);
});

// let promiseAll = Promise.all([p1, p2, p3, p4]);
// promiseAll.then((value) => {
//   console.log(value);
// });

// let promiseAll = Promise.allSettled([p1, p2, p3, p4]);
// promiseAll.then((value) => {
//   console.log(value);
// });

// let promiseAll = Promise.race([p1, p2, p3, p4]);
// promiseAll.then((value) => {
//   console.log(value);
// });

// let promiseAll = Promise.any([p1, p2, p3, p4]);
// promiseAll.then((value) => {
//   console.log(value);
// });

// let promiseAll = Promise.resolve([p1, p2, p3, p4]);
// promiseAll.then((value) => {
//   console.log(value);
// });

let promiseAll = Promise.reject([p1, p2, p3, p4]);
promiseAll.then((value) => {
  console.log(value);
});
