//create a navbar and change the color of its first element to red
document.getElementsByTagName("ul")[0].firstElementChild.style.color = "red";
//create a table without tbody now use "view page source" button to check whether it has a tbody or not

//create an element with 3 childrean now change the color of first and last element to green
document.getElementsByTagName("ul")[0].firstElementChild.style.color = "green";
document.getElementsByTagName("ul")[0].lastElementChild.style.color = "green";
//write a js code change background of all <li> tags to cyan
Array.from(document.getElementsByTagName("li")).forEach((element) => {
  element.style.background = "cyan";
});
