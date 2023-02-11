const seyHello = (name) => {
  console.log("Greeting " + " " + name);
  console.log("hi");
};

const x = {
  name: "Harry",
  role: "Js Developer",
  exp: 30,
  show: function () {
    //let that = this
    //console.log(this)
    setTimeout(() => {
      console.log(`The name is ${this.name}\nthe role is ${this.role}`);
    }, 2000);
  },
};

// seyHello("Harry", "Good afternoon");
// console.log(x.name, x.role);
x.show();
