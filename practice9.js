//write a program to load a javascript file in a browser using promise use .then() to display an alert the load is complete
const loadScript = async (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(src + " Done successfully");
    };
    document.head.append(script);
  });
};

let a = loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
);
a.then((value) => {
  console.log(value);
});

//write the same program from previous quation and use async/await syntax
const loadScript2 = async (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(src + " Done successfully...");
    };
    document.head.append(script);
  });
};

const load = async () => {
  console.log(new Date().getMilliseconds());
  let a = await loadScript2(
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
  );
  console.log(a);
  console.log(new Date().getMilliseconds());
};

load();

//create a promise which reject after 3sec use an async/await to get its value use a try and catch its error
let p = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Please this is not acceptable"));
    }, 3000);
  });
};

let aa = async () => {
  try {
    let c = await p();
    console.log(c);
  } catch (error) {
    console.log("this Error has been handled");
  }
};
aa();

//write a program using promise.all() inside an async/await to 3 promise . compare its result with the case where we await these pronise one by one
let p1 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 2000);
  });
};

let p2 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
};

let p3 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 3000);
  });
};

// const run = async () => {
//   console.time("run");
//   let a1 = await p1();//fetch first 10 product from database
//   let a2 = await p2();//fetch another first 10 product from database
//   let a3 = await p3();//fetch another first 10 product from database
//   console.log(a1, a2, a3);
//   console.timeEnd("run");
// };

// run();

//below code is faster than above
const run = async () => {
  console.time("run");
  let a1 = p1();
  let a2 = p2();
  let a3 = p3();
  let a1a2a3 = await Promise.all([a1, a2, a3]);
  console.log(a1a2a3);
  console.timeEnd("run");
};
run();
