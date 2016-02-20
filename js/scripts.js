$(document).ready(function() {
  $("#questions form").submit(function(event) {
    var question1 = $("button#goal").val();
    var question2 = $("button#activity").val();
    var question3 = $("button#who").val();
    var question4 = $("button#climate").val();
    var question5 = $("button#distance").val();


    var answer =  0;
    if (question1 === "active" ) {
      answer = + 1;
    } else if (question1 === "rest") {
      answer = + 2;
      } else {
        answer = + 0;
      }
    if (question2 === "eat" ) {
      answer = + 3;
    } else if (question2 === "explore") {
      answer = + 4;
      } else {
        answer = + 0;
      }
    if (question3 === "friends" ) {
      answer = + 5;
    } else if (question3 === "family") {
        answer = + 6;
      } else {
        answer = + 0;
      }
    if (question4 === "warm" ) {
      answer = + 7;
    } else if (question4 === "cool") {
      answer = + 8;
      } else {
        answer = + 0;
      }
    if (question4 === "close" ) {
      answer = + 9;
    } else if (question4 === "far") {
      answer = + 20;
      } else {
        answer = + 0;
      }
      event.preventDefault();
    });



      var destinationResult = ["question1", "question2", "question3", "question4", "question5"]
      if (answer <= 25){
        $("span#summary").append(<"More information is needed.ß");
      } else if (answer >=26 ) {
        $("#nola").show();
      } else if (answer >= 28) {
        $("#denver").show();
      } else if (answer >= 36) {
        $("#barcelona").show();
      } else if (answer >= 37) {
        $("#copenhagen").show();
      }
});
