try {
  girish;
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}

//custom error

try {
  let age = prompt("Enter your age");
  age = Number.parseInt(age);
  if (age > 120) {
    throw new ReferenceError("this is probable not true");
  }
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}

console.log("this script is still running");
