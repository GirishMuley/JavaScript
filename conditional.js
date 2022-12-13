//Conditional expression in javascript
//conditional expression are if, if else ,if else if else if and switch

//if

let age = 5;
if (age > 0) {
  console.log("ok...");
}

//if else

let age2 = -1;
if (age2 > 0) {
  console.log("ok...");
} else {
  console.log("Invalid");
}

//Nested if or if else ladder
let a = 18;
if (a < 0) {
  console.log("this is an invalid age");
} else if (a < 9) {
  console.log("You are kid you can not drive");
} else if ((a = 18 && a >= 18)) {
  console.log("You can drive");
} else {
  console.log("Invalid entry");
}

//switch case
let fruit = "b";
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
