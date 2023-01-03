//write a program using prompt function to table input of age as a value from the user and use alert to tell him if he can drive.
//in Q1 use confirm to ask the user if he wants to see the prompt again
//in the previous quation, use console.error to log the error if the age entereed is negative

let runAgain = true;

const canDrive = (age) => {
  return age >= 18 ? true : false;
};

while (runAgain) {
  let age = prompt("enter your age");
  age = Number.parseInt(age);
  if (age < 0) {
    console.error("age can not be negative");
    break;
  }
  if (canDrive(age)) {
    alert("You can drive");
  } else {
    alert("You can not drive");
  }
  runAgain = confirm("Do you want to check again");
}

//write a program to change the url to google.com(redirection) if user enters a number greater than 4
let num = prompt("Enter a number");
num = Number.parseInt(num);

if (num > 4) {
  location.href = "https://google.com";
}

//change the backgrond of the page to yellow, red or any other color based o user input through prompt
let color = prompt("Enter a color");
document.body.style.background = color;
