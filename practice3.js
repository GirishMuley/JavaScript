// write a program to print the marks of a students of an object usimg for loop

let marks = {
  Girish: 90,
  shailesh: 89,
  Vishal: 70,
  Monika: 60,
};

for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(
    "The mark of " +
      Object.keys(marks)[i] +
      " are " +
      marks[Object.keys(marks)[i]]
  );
}
console.log("-----------------------------------------------------");
//write the above program using for in loop
for (let keys in marks) {
  console.log("The mark of " + keys + "are" + marks[keys]);
}

console.log("-----------------------------------------------------");
//write a program to print "try again" until the user enter the correct number

let num = 50;
let ch = 50;
while (ch != num) {
  console.log("Enter a number");
  if (ch != num) {
    console.log("Try again");
    break;
  }
}
console.log("Welcome...");

//write a function to find the mean of five number
const mean = (p, q, r, s, t) => {
  return (p + q + r + s + t) / 5;
};

console.log("mean of five number is " + mean(10, 10, 10, 10, 10));
