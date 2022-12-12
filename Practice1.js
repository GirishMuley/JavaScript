//create a variable of type string and try to add a number to it
let name = "Girish";
let age = 24;
console.log("My name is " + name + " and i am " + age + " old");

//use typeof operator to find the datatype of the string in last quation
console.log(typeof name);
console.log(typeof age);
console.log(typeof (name + age));

//create a const object in js can you change in to hold a number later
const stud = {
  userName: "Girish",
  age: 24,
  isStudent: true,
};

// stud = 55;
// stud = {};
//ans you can't do that

//try to add a new key to the const object in problem 3 were you are you able to do it
stud["surname"] = "Muley";
stud["userName"] = "Jack";
console.log(stud);
// ans yes

//write a program in js to create a word meaning dictionary of 5 words.
const dictionary = {
  Samhain:
    "a festival of the ancient Celts, held around November 1 to celebrate the beginning of winter.",
  bazaar:
    "a marketplace or shopping quarter, especially one in the Middle East",
  rhotacize: "verb (used with object). to change (a sound) to an (r)",
  vote: " to express or signify will or choice in a matter, as by casting a ballot",
  democracy: "gov by the pepple",
};
console.log(dictionary.vote);
console.log(dictionary["vote"]);
