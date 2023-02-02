console.log(document.cookie);
document.cookie = "name=Girish";
document.cookie = "name=Girish21";
let key = prompt("Enter your key");
let value = prompt("Enter your value");
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
console.log(document.cookie);
