$(document).ready(function() {
 +  $("#questions form").submit(function(event) {
      var question1 = $("select#goal").val();
      var question2 = $("select#activity").val();
      var question3 = $("select#who").val();
      var question4 = $("select#climate").val();
      var question5 = $("select#distance").val();

      var result = "." + question1 + "." + question2 + "." + question3;

    if ( question4 === "warm" ) {
      $(".summary#nola").show();
    } else if ( question4 === "cool" ){
      $(".summary#barcelona").show();
    }

    if ( question5  === "close" ) {
      $(".summary#denver").show();
    } else if ( question5 === "far" ) {
      $("#copenhagen").show();
    }

    $("#first").toggle();
    $(result).toggle();


    event.preventDefault();
  });
});
