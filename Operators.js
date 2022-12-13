//Operators, Expressions, conditions and comments in js
//there are 4 types of 1.arithmetic operators 2.assignmet operators 3.comparison operators 4.Logical operators
//Arithmetic operatos
let a = 10;
let b = 5;
console.log("a + b", a + b); // + is addtion operator
console.log("a - b", a - b); // - is substraction operator
console.log("a / b", a / b); // / is division
console.log("a * b", a * b); // * is multiplication
console.log("a % b", a % b); // % modules use to get remender
console.log("a ** b", a ** b); // Exponentiation use to get power of number

//Increment and Decrement
// ++ for Increment
// -- for Decrement
//type of Increment and Decrement is two PreIncrement and PostIncrement

//PreIncrement
++a;
console.log(a);

//PostIncrement
a++;
console.log(a);

//PreDcrement
--a;
console.log(a);
//PostDcremetn
a++;
console.log(a);

//Assigment operators
//Assignmet operator are usr to assig value
let x = 1;
let y = 5;

x = y; // =  use to assign right side value to the left side variable.
console.log(x);
x += y; // += same as x=x+y; this will add the value of x&y and assign to the left side x.
console.log(x);
x -= y; // -= same as x=x-y; this will substract the values and assign to left side.
console.log(x);
x *= y; // *= same as x=x*y; this will multiply the values and assign to the x.
console.log(x);
x /= y; // /= same as x=x/y; thia will divide the values and assign ans to the x.
console.log(x);
x %= y; // %= same as x=x%y; this will give reminder of this to values and assign to x.
console.log(x);
x ** y; // ** same as x = x**y this will give power and assign to x.
console.log(x);

//Comparison operators
//comparison operators are use to compare varible,values and their data types. or we can say it is use to comapre to variables or values.
let number1 = 10;
let number2 = "10";
console.log("number1 == number2", number1 == number2); //== this will check values are same or not
console.log("number1 != number2", number1 != number2); //!= this means check num1 is not equal to num2 if this is case return true otherwise false.
console.log("number1 === number2", number1 === number2); //=== this will check the numbers are equals or not and there datatypes also need to be same if they are same return true otherwise false.
console.log("number1 !== number2", number1 !== number2); // !== this will ckeck the num1 is not equal to the num2 and it's datatype is also not equal to the num2.
console.log("number1 > number2", number1 > number2); //> this is use to check which value is greater.
console.log("number1 < number2", number1 < number2); //this is use to check which value is samller
console.log("number1 >= number2", number1 >= number2); //>= this is use to check whether number is greater or equal to the other number.
console.log("number1 <= number2", number1 <= number2); //<= this is use to check whether number is smaller or equal to the other number.
console.log("number1 > number2?true:false", number1 > number2 ? true : false); //? this is ternary operator use to check condition.

//Logical operator
//Logial operator use to compare two conditions
let value1 = 10;
let value2 = 20;
console.log(value1 < value2 && value1 > value2); //this is AND operator this is ensure if both condtion are true go ahead otherwise stop.
console.log(value1 < value2 || value1 > value2); //this is OR operatoe this is check at list one condtion is true the go ahed otherwise stop.
console.log(!false); //this is NOT operator if value is true it will give us a false result if true it will give false.

//Comments in js
//this is single-line comment
/*this is muti-line comment 
  multi-line comment is use for paragraph or more the 2 line comments*/
