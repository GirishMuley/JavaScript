alert("enter the value");
let a = prompt("enter value here:", "21");
a = Number.parseInt(a);
alert("You enter value datatype " + typeof a);
let write = confirm("Do you wnat to write it on the page");
if (write) {
  document.write(a);
} else {
  document.write("please allow me to write");
}
