$(document).ready(function() {
+  $("form#questions").submit(function(event) {
    var question1 = $("select#goal").val();
    var question2 = $("select#activity").val();
    var question3 = $("select#who").val();
    var question4 = $("select#climate").val();
    var question5 = $("select#distance").val();



    var climateDistance = (question4, question5);
    var result = [];
    if (climateDistance === "warm" && "close") {
      result = ["#nola"];
    } else if (climateDistance === "warm" && "far") {
      result = ["#barcelona"];
    } else if (climateDistance === "cool" && "close") {
      result = ["#denver"];
    } else if (climateDistance === "cool" && "far") {
      result = ["#copenhagen"];
    } else {
      $("#summary").append("<strong><h2>More information is needed to find your dream vacation!</h2></strong>");
    }




    $("#first").toggle();
    $(result).toggle();


    event.preventDefault();
  });
});
