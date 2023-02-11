//write a javaScript program to print the following after 2 second delay hello world
const a = async (text, n = 2) => {
  return new Promise((resolve, reject) => {
    resolve(text);
  }, 1000 * n);
};

(async () => {
  let text = await a("Hello");
  console.log(text);
  text = await a("World");
  console.log(text);
})();

//write a javaScript program to find average of number in an array using spread syntax
function sum(a, b, c) {
  return a + b + c;
}
let x = [1, 3, 5];
console.log(sum(...x));

//write a javascript function which resolve a promise after n seconds the function takes n as the parameter use an iife to execute the dunction with different value of n
(async () => {
  let text = await a("I am resolving after 1 seconds", 1);
  console.log(text);
  text = await a("I am resolving after 4 sexonds", 4);
  console.log(text);
})();

//write a simple interest calculater using js
function simpleInterest(p, r, t) {
  return (p * r * t) / 100;
}
console.log(simpleInterest(1000, 5, 1));
