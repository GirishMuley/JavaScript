let carttitle = document.getElementsByClassName("card-title")[0];
carttitle.style.color = "red";

let text = document.getElementById("firsttext");
text.style.color = "Blue";

let ctitile = document.querySelectorAll(".card-title");
ctitile[1].style.color = "blue";
ctitile[2].style.color = "green";
console.log(ctitile);

document.querySelector(".this").style.color = "red";
document.querySelector(".this").style.background = "black";

console.log(document.getElementsByTagName("a"));
console.log(document.querySelector(".card").getElementsByTagName("a"));
console.log(document.getElementsByName("search"));
