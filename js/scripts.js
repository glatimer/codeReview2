$(document).ready(function() {
+  $("form#questions").submit(function(event) {
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
      alert("More information is needed to find your dream vacation!")
      location.reload();
    }


    var name = $("input#name").val();
    var goal = $("select#goal").val();
    var activity = $("select#activity").val();
    var who = $("select#who").val();

    $("span#name").append(name);
    $("span#goal").append(goal);
    $("span#activity").append(activity);
    $("span#who").append(who);



    $("#first").toggle();
    $(suggestion).toggle();
    $("#summary").show();




    event.preventDefault();
  });
});
