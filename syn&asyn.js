// //sysnchronus programming
// let a = prompt("What is your name?");
// let b = prompt("What is your age?");
// let c = prompt("What is your favorite color?");
// console.log(a + " is " + b + " year old and has " + c + " facorite color. ");

// //Asysnchronus programming
// console.log("start");
// setTimeout(function () {
//   console.log("hey i am good");
// }, 3000);
// console.log("end");

//callback
function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = function () {
    console.log("loading script with SRC: " + src);
    callback(null, src);
  };
  script.onerror = function () {
    console.log("Error loading script with SRC:" + src);
    callback(new Error("src got some error"));
  };
  document.body.appendChild(script);
}

function hello(error, src) {
  if (error) {
    console.log(error);
    return;
  }
  alert("hello world!" + src);
}

function goodmorning(error, src) {
  if (error) {
    console.log(error);
    return;
  }
  alert("Good morning" + src);
}

loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
  goodmorning
);
