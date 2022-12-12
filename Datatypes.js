//there are two types of data types in JavaScript
//1.Primative data type
//2.Non-primitive data type
//short cut to remenber nn bb ss u

//Primative Data types in js
let a = null; //null object data type
let b = 345; // number (integer) data type
let c = true; //booolen data type //can also be false
let d = BigInt("567"); // BigInt (big integer) data type
let e = "Girish"; //string data type
let f = Symbol("this is a symbol"); //symbol data type
let g = undefined; // undefined data type

console.log(a, b, c, d, e, f, g);
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);

//Non Primative data type in js
// Object
//Object represent instance through which we can access members

const item = {
  userName: "Girish",
  userAge: 90,
};
console.log(item["userName"]);
