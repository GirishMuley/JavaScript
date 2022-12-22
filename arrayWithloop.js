let num = [3, 54, 1, 2, 4];

for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}
console.log("-------------------------------------------------");
//for each
num.forEach((element) => {
  console.log(element * element);
});
console.log("-------------------------------------------------");

//array.form
let name = "Girish";
let arr = Array.from(name);
console.log(arr);
console.log("-------------------------------------------------");

//for..of
for (let item of num) {
  console.log(item);
}
console.log("-------------------------------------------------");

//for..in
for (let keys in num) {
  console.log(keys);
}
