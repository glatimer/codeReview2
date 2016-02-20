$(document).ready(function() {
  $("form#questions").submit(function(event) {
    var question1 = $("select#goal").val();
    var question2 = $("select#activity").val();
    var question3 = $("select#who").val();
    var question4 = $("select#climate").val();
    var question5 = $("select#distance").val();

    var result =  [question1 + question2 + question3 + question4 + question5];

    if (result === ["rest" || "eat" || "friends" || "warm" || "close"] ) {
      ("#nola").show();
    } else if (result === ["active" || "explore" || "family" || "cool" || "close"]) {
      ("#denver").show();
    } else if (result === ["active" || "eat" || "friends" || "warm" || "far"]) {
      ("#barcelona").show();
    } else if (result === ["rest" || "explore" || "family" || "cool" || "far"]) {
      ("#copenhagen").show();



    event.preventDefault();


  });
});


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
