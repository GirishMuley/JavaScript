// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Resolve after 2 secons");
//     resolve(56);
//   }, 2000);
// });

// p1.then((value) => {
//   console.log(value);
//   let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("promise 2");
//     }, 2000);
//   });
//   return p2;
// })
//   .then((value) => {
//     console.log("we are done");
//     return 2;
//   })
//   .then((value) => {
//     console.log("Now we are really done");
//   });

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.type = "text/javascript";
    document.body.appendChild(script);
    script.onload = () => {
      resolve("script has been loaded");
    };
    script.onerror = () => {
      reject(0);
    };
  });
};

let load = loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
);
load
  .then((value) => {
    console.log(value);
    return loadScript(
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
    );
  })
  .then((value) => {
    console.log("Second script is ready");
  })
  .catch((error) => {
    console.log("we are sorry but we are having problems loading this script");
  });
