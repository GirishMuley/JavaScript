console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.childNodes);

//how to convert node list into array
let arr = Array.from(document.body.childNodes);
console.log(arr);
