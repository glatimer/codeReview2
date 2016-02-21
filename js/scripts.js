$(document).ready(function() {
+  $("form#questions").submit(function(event) {
    var question1 = $("select#goal").val();
    var question2 = $("select#activity").val();
    var question3 = $("select#who").val();
    var question4 = $("select#climate").val();
    var question5 = $("select#distance").val();

    var result = (question5, question4, question3, question2, question1);
    if (result === "close" && "warm" || "friends" || "eat" ||"rest") {
      $("#nola").show();
    } else if (result === "far" && "warm" || "friends" || "eat" || "rest") {
      $("#barcelona").show();
    } else if (result  === "close" && "cool" || "family" || "explore" || "active") {
      $("#denver").show();
    } else if (result  === "far" && "cool" || "family" || "explore" || "active") {
      $("#copenhagen").show();
    } else {
      $(document).write("<h2>More information is needed to find out your personalized vacation!</h2>");
    }

    $("#first").toggle();
    $(result).toggle();


    event.preventDefault();
  });
});
