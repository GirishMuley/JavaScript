let name = "Girish";
console.log(name);
console.log(name.length);
//access the single charectors
console.log(name[0]);
console.log(name[1]);

//string can also create by using single quotes
let username = "jack";
console.log(username);
console.log(username.length);

//Template literals
//this is morden js
let boy1 = "Girish";
let boy2 = "Vishal";
//we can print following string using template literals
//Girish is a frien of vishal
//we have to wirte in side tilde quoates
let sentence = `${boy1} is a frien of ${boy2}`;
console.log(sentence);
//we can insert variable directly in template literal .this is called string interpolation

//Escape sequence charactors
//we can write following string using this
//he's not eating bana'na.
let line = 'he\'s not eating Bana\'na';
console.log(line);
//using douable quoates
let line2 = "he\"s not eating Bana\"na";
console.log(line2);
