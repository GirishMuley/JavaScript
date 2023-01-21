let p = new Promise((resolve, reject) => {
  console.log("promise is pending");
  setTimeout(() => {
    console.log("I am a promise and i am fulfilled");
    resolve(true);
  }, 5000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("I am a promise and i am rejected");
    reject(new Error("I am error"));
  }, 5000);
});
// console.log(p, p2);

p.then((velue) => {
  console.log(value);
});

// p2.then((value) => {
//   console.log(value);
// });

p2.catch((error) => {
  console.log("some error occurred in p2");
});

p2.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error);
  }
);
