let marks_class_12 = [91, 82, 63, 84, false, "Not Present"];
for (let i = 0; i < marks_class_12.length; i++) {
  console.log(marks_class_12[i]);
}
console.log(marks_class_12.length);
console.log(marks_class_12[6]); //will be undefined because index 6 does not exist
marks_class_12[6] = 88; //adding a new value to the array
marks_class_12[0] = 99; //changing the value of an array
for (let i = 0; i < marks_class_12.length; i++) {
  console.log(marks_class_12[i]);
}
console.log(typeof marks_class_12); // type is object
