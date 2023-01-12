//write a program to show different alert when different buttons are clicked
//create a website which is capable of storing bookmarks of your favorite websites using href
//repeat Q2 using event listener
document.getElementById("google").addEventListener("click", function () {
  window.location = "https://www.google.com";
});
//write a js program to keep fetching contents of a website (every 5 sec)
// const fetchContent = async (url) => {
//   con = await fetch(url);
//   let a = await con.json();
//   return a;
// };

// setInterval(async function () {
//   let url = "https://jsonplaceholder.typicode.com/todos/1";
//   console.log(await fetchContent(url));
// }, 5000);
//create a glowing effect using classlist toggle method in js
setInterval(async function () {
  document.querySelector("#bulb").classList.toggle("bulb");
}, 200);
