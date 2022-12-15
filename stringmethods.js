let name = "Girish";
console.log(name.length); //length is a property use to find out numer charactors in the string
console.log(name.toUpperCase()); //this ia a build in function use to convert string to uppercase
console.log(name.toLowerCase());

//slice
//slice is use to print the string from particular index to index or particular index to end of the string.
//following will only print the 2 and 3 index char
console.log(name.slice(2, 4));
//this will print from 2 index of string
console.log(name.slice(2));

//replace
//replace is use to replce string.
let line = "Girish is LAMP Stack developer";
//first parameter is we have to give used in string and 2nd we have to put.
console.log(line.replace("LAMP", "MERN"));

//concat
//this is use to add to string into one string
let firstname = "Girish";
let lastname = "Muley";
console.log(firstname.concat(" ", lastname));

//trim
//this is use to remove spaces from the string
let space = "      jack      ";
console.log(space.trim());

// for (let i = 0; firstname.length; i++) {
//   console.log(firstname.charAt(i));
// }
