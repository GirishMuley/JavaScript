class Employee {
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
  requestCoffes() {
    console.log(`Employee has requested coffes`);
  }
  requestLeves(leaves) {
    super.requestLeves(4);
    console.log("one leave extra");
    // console.log(`Employee has requsted ${leaves + 1} leaves (One extra)`);
  }
}

let e = new Programmer();
e.login();
e.requestLeves(3);
