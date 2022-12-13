//use logical operator to find whether the age of person lies between 10 and 20
let age = 19;
if (age >= 10 && age <= 20) {
  console.log("Your age lies between 10 and 20");
} else {
  console.log("Your age doesn't lies between 10 and 20");
}

//demonstrate the use of switch case in js
let fruit = "mango";
switch (fruit) {
  case "mango":
    console.log("Rs.100");
    break;
  case "banana":
    console.log("Rs.50");
    break;
  default:
    console.log("Invalid");
}

//write a javascript program to find whether a number is divisible by 2 and 3
let num = 6;
if (num % 2 == 0 && num % 3 == 0) {
  console.log("number is divisible by 2 and 3");
} else {
  console.log("number is not divisible by 2 and 3");
}

//write a javascript program to find whether a number is divisible by either 2 or 3.
let number = 11;
if (number % 2 == 0 || number % 3 == 0) {
  console.log(
    number % 2 == 0 ? "number is divisible by 2" : "number is divisible by 3"
  );
} else {
  console.log("number is not divisible by 2 or 3");
}

//print "You can drive" or "You can't drive" based on age being greater than 18 using ternary operator
console.log(age >= 18 ? "You can drive" : "You can't drive");
