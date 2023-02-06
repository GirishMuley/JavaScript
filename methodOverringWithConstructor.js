class Employee {
  constructor(name) {
    console.log(`${name} - Employee constructor is here`);
    this.name = name;
  }
  login() {
    console.log(`Employee has logged in`);
  }
  logout() {
    console.log(`Employee has logged out`);
  }
  requestLeves(leaves) {
    console.log(`Employee has requested ${leaves} leaves - Auto`);
  }
}

class Programmer extends Employee {
  constructor(name) {
    super(name);
    console.log(`${name} this is newly written constructor`);
    this.name = name;
  }
  requestCoffes() {
    console.log(`Employee has requested coffes`);
  }
  requestLeves(leaves) {
    super.requestLeves(4);
    console.log("one leave extra");
    // console.log(`Employee has requsted ${leaves + 1} leaves (One extra)`);
  }
}

let e = new Programmer("Harray");
e.login();
e.requestLeves(3);
