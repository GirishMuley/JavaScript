setTimeout(() => {
  console.log("Hacking wifi ...... please wait...");
}, 1000);

try {
  console.log(rahul);
} catch (error) {
  console.log("Please check this : " + error);
}

try {
  setTimeout(() => {
    try {
      console.log(rahul);
    } catch (error) {
      console.log(error);
    }
  });
} catch (error) {
  console.log("Please check this : " + error);
}

//following code will not be handle by javaScript

try {
  setTimeout(() => {
    console.log(rahul);
  }, 1000);
} catch (error) {
  console.log("Please check this : " + error);
}
setTimeout(() => {
  console.log("Fetching username and password..... please wait...");
}, 2000);
setTimeout(() => {
  console.log("Hacking Rahul facebook id... please wait.....");
}, 3000);
setTimeout(() => {
  console.log("Username and password of rahul fetched ..... successfully.....");
}, 4000);
