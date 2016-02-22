$(document).ready(function() {
+  $("form#questions").submit(function(event) {
    var goal = $("select#goal").val();
    var activity = $("select#activity").val();
    var who = $("select#who").val();
    var climate = $("select#climate").val();
    var distance = $("select#distance").val();

    var climateDistance = [];
    if (climate==="warm" && distance==="close") {
      climateDistance = ("nola");
    } else if (climate==="warm" && distance==="far") {
      climateDistance = ("barcelona");
    } else if (climate==="cool" && distance==="close") {
      climateDistance = ("denver");
    } else if (climate==="warm" && distance==="far") {
      climateDistance = ("copenhagen");
    }

    var suggestion = []
    if (climate==="warm" && distance==="close", activity==="eat" || who==="friends") {
      suggestion = ("#nola");
    } else if (climate==="warm" && distance==="far", goal==="active" || activity==="explore") {
      suggestion = ("#barcelona");
    } else if (climate==="cool" && distance==="close", goal==="active" || who==="family") {
      suggestion = ("#denver");
    } else if (climate==="cool" && distance==="far", activity==="explore" || who==="family") {
      suggestion = ("#copenhagen");
    } else {
      $("span#suggestion").append("<strong><h2>More information is needed to find your dream vacation!</h2></strong>");
    }




    $("#first").toggle();
    $(suggestion).toggle();


    event.preventDefault();
  });
});
