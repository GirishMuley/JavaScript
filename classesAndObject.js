class RailwayFrom {
  submit() {
    alert(this.name + " form submitted for train number " + this.trainno);
  }
  cancel() {
    alert(
      this.name + " This form is cancelled for train number " + this.trainno
    );
  }
  fill(name, trainno) {
    this.name = name;
    this.trainno = trainno;
  }
}

let harryForm = new RailwayFrom();
harryForm.fill("harry", 12640);
let rohanForm1 = new RailwayFrom();
rohanForm1.fill("rohan", 222420);
let rohanForm2 = new RailwayFrom();
rohanForm2.fill("rohan", 229211);

harryForm.submit();
rohanForm1.submit();
rohanForm2.submit();
rohanForm1.cancel();
