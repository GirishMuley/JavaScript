//A loop is a sequence of instructions that is continually repeated until a certail condition is reached
//following are the loops in js
//For loop
//For in loop
//For of loop
//while loop
//do-while loop

//For loop
//loop a block of code no of times
let sum = 0;
let n = 4;
for (let i = 0; i < n; i++) {
  sum += i + 1;
}
console.log("sum of first " + n + " natural numbers is " + sum);

//For in loop
//loop through the keys of an object

let obj = {
  Girish: 90,
  Shailesh: 95,
  Onkar: 80,
  Vishal: 60,
};

for (let name in obj) {
  console.log("Mark of " + name + " is " + obj[name]);
}

//for of loop
//loop through the values of an object

for (let value of "Girish") {
  console.log(value);
}

//while loop
let count = 5;
let i = 0;
while (i < n) {
  console.log(i);
  i++;
}

//Do-while loop
//do while loop execute at least one's even if condition is false
let counetr = 0;
let number = 5;
do {
  console.log(counetr);
  counetr++;
} while (counetr < number);
