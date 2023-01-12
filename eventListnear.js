// btn.addEventListener("click", function (e) {
//   alert("hello world1");
// });

// btn.addEventListener("click", function (e) {
//   alert("hello world2");
// });

let x = function (e) {
  console.log(e.target);
  console.log(e.type, e.clientX, e.clientY);
  alert("hello word 1");
};

let y = function (e) {
  alert("hello word 2");
};

btn.addEventListener("click", x);
btn.addEventListener("click", y);

let a = prompt("enter a number");
if (a == "2") {
  btn.removeEventListener("click", y);
}
