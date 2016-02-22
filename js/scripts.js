$(document).ready(function() {
+  $("form#questions").submit(function(event) {
    var goal = $("select#goal").val();
    var activity = $("select#activity").val();
    var who = $("select#who").val();
    var climate = $("select#climate").val();
    var distance = $("select#distance").val();

    var suggestion = []
    if (climate==="warm" && distance==="close") {
      suggestion = ("#nola");
    } else if (climate==="warm" && distance==="far") {
      suggestion = ("#barcelona");
    } else if (climate==="cool" && distance==="close") {
      suggestion = ("#denver");
    } else if (climate==="cool" && distance==="far") {
      suggestion = ("#copenhagen");
    } else {
      $("span#suggestion").append("<strong><h2>More information is needed to find your dream vacation!</h2></strong>");
    }

    $("#first").toggle();
    $(suggestion).toggle();


    event.preventDefault();
  });
});
