class Animal {
  constructor(name) {
    this.name = Animal.capitalizze(name);
  }
  walk() {
    alert("Animal " + this.name + " is walking");
  }
  static capitalizze(name) {
    return name.charAt(0).toUpperCase() + name.substr(1, name.length);
  }
}

j = new Animal("jack");
j.walk();
// console.log(j.capitalizze("rhis")) this doent work
