//Array methods
let a = [10, 20, 30, 40, 50];
let b = [60, 70, 80, 90, 100];
let c = [110, 120, 130, 140, 150];

// toString method convert array to string
let str = a.toString(a);
console.log(str, typeof str);
console.log("-----------------------------------------------");
//join method is use to join something between array values
let join = a.join(" and ");
console.log(join, typeof join);
console.log("-----------------------------------------------");
//pop method is use to pop out  value from right or end side of array
//modified the array
console.log(a);
let popout = a.pop();
console.log(a);
console.log(popout); //pop return the popped element
console.log("-----------------------------------------------");

//push method is use to push or insert element in side the array at end
//modified the array
let pushed = a.push(56);
console.log(pushed); // push return the new length of array
console.log(a);
console.log("-----------------------------------------------");

//shift method remove the first element of array and modified array.
//modified the array
let shifted = a.shift();
console.log(shifted); //shift return the first element of the array
console.log(a);
console.log("-----------------------------------------------");

//unshift method is use to add element at the starting of the array
//modified the array
let unshifted = a.unshift(78);
console.log(unshifted); //return the new length of the array
console.log(a);

// Delete delete is a actualy operator this will delete given index element
//delete does not change array length
console.log(a.length);
delete a[0];
console.log(a);
console.log(a.length);
console.log("-----------------------------------------------");

//concat method is use to concatinate the two or more array
let newArray = a.concat(b, c);
console.log(newArray);
console.log("-----------------------------------------------");

//sort methos is use to sort the array
//sort method sort the method according to the first character or we can say value
let sortArray = [160, 1170, 280, 3590, 200];
sortArray.sort();
console.log(sortArray);
console.log("-----------------------------------------------");

//compare function
//by using compare function we can sort array according to given condition
//we are going to sort decresing order
let compare = (a, b) => {
  return b - a;
};
sortArray.sort(compare);
console.log(sortArray);
console.log("-----------------------------------------------");

//reverse method is use to reverse a array
a.reverse();
console.log(a);
console.log("-----------------------------------------------");

//splice and slice
//by using splice we can remove value form given index to next how many index want to delete and then add the values
//example splice(index from value remove,how many element want to delete,here enter the new value to add in array)

let e = [210, 220, 230, 240, 250];
let deletedValues = e.splice(2, 3, 1022, 1023, 1024, 1024);
console.log(e);
console.log(deletedValues); //splice return deleted values
console.log("-----------------------------------------------");

//splice
let f = [260, 270, 280, 290, 300];
let newf = f.slice(2);
console.log(f);
console.log(newf);

let j = [310, 320, 330, 340, 350];
let newj = j.slice(1.3);
console.log(newj);
