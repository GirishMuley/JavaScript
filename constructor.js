class RailwayForm {
  constructor(name, trainno, startingPoint, endingPoint) {
    this.name = name;
    this.trainno = trainno;
    this.startingPoint = startingPoint;
    this.endingPoint = endingPoint;
  }

  preview() {
    alert(
      this.name +
        " Your form is for train number " +
        this.trainno +
        " and your starting point is  " +
        this.startingPoint +
        " ending point is" +
        this.endingPoint
    );
  }

  submit() {
    alert(this.name + "Your form is submitted for train number" + this.trainno);
  }
  cancel() {
    alert(
      this.name + " This from is cancelled for train number " + this.trainno
    );
  }
}

let form = new RailwayForm("Harry", 222420, "jalna", "Aurangabad");

form.preview();
form.submit();
form.cancel();
