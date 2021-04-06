//Business Logic

function Movie(title, age, time) {
  this.title = title;
  this.age = age;
  this.time = time;
}

Movie.prototype.price = function () {

  let cost = 5
  if (this.title === "new" && this.age > 13 && this.time === "early") {
    cost += 3;
  } else if (this.title === "new" && this.age > 13 && this.time === "late") {
    cost += 6;
  } else if (this.title === "new" && this.age <= 13 && this.time === "late") {
    cost += 3;
  } else if (this.title === "old" && this.age > 13 && this.time === "early") {
    cost += 2;
  } else if (this.title === "old" && this.age > 13 && this.time === "late") {
    cost += 4;
  } else if (this.title === "old" && this.age <= 13 && this.time === "late") {
    cost += 1;
  }
  return cost;

}

//let movie = new Movie("old", 15, "late");

//console.log(movie.price());

//UI

$(document).ready(function () {

  $("form").submit(function (e) {
    e.preventDefault();
    const title = $("#title").val();
    const age = $("#age").val();
    const time = $("#time").val();

    $("#title").val("");
    $("#age").val("");
    $("#time").val("");

    let movie = new Movie(title, parseInt(age), time);

    $("#output").html("<p> Based on your info you provided, the price is: " + movie.price() + "</p>");

  });

});