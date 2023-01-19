let promise = new Promise(function (resolve, reject) {
  alert("hello");
  resolve(56);
});

console.log("Hello");
setTimeout(function () {
  console.log("Nice name");
}, 2000);

console.log("My name is Girish");
console.log(promise);
