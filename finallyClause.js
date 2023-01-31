const f = () => {
  try {
    let a = 0;
    console.log(girish);
    console.log("Program ran successfully");
    return;
  } catch (error) {
    console.log("this is an error");
    console.log(p);
  } finally {
    console.log("i am from finally clause");
    //use to close the file
    //exit the loop
    //write to the log file
  }
};

f();
