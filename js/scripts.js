$(document).ready(function() {
  $("#questions form").submit(function(event) {
    var question = $("select#goal", "select#activity", "select#activity", "select#who", "select#climate", "select#distance").val();


    if (question === ["rest" || "eat" || "friends" || "warm" || "close"]) {
      $("#nola").show();
    } else if (question === ["active" || "explore" || "family" || "cool" || "close"]) {
      $("#denver").show();
    } else if (question === ["active" || "eat" || "friends" || "warm" || "far"]) {
      $("#barcelona").show();
    } else if (question === ["rest" || "explore" || "family" || "cool" || "far"]) {
      $("#copenhagen").show();
    } else {
      $("span#summary").append(function);
        $(document).write("<h3>We need more information to process your request.</h3>");
    }

    event.preventDefault();


  });
});
