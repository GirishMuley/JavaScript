//what will be the following print in js
let line = 'her"';
console.log(line.length);
// output 4
console.log("----------------------------------------------------");
//explore the inlcude startwith and endwith function of a string
const sentence = "the quick brown fox jumps over the lazy dog";
const word = "fox";
console.log(
  `the word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`
);
console.log(sentence.includes(word));

console.log("below is endwith example");

const str = "cats are the best!";
console.log(str.endsWith("best!"));
console.log("----------------------------------------------------");

//write a program to convert string to lowercase
const string = "THIS IS LINE";
console.log(string.toLocaleLowerCase());
console.log("----------------------------------------------------");
//extract the amount out of this string "please give rs 1000"
let lines = "please give rs 1000";
let amount = Number.parseInt(lines.slice(15));
console.log(amount);
console.log(typeof amount);
console.log("----------------------------------------------------");

//try to change the 4th charactor of a given string were you are to do it
let friend = "deepika";
friend[3] = "r";
console.log(friend); //friend is not changed, because string is immutable.
