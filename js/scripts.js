$(document).ready(function() {
  $("#turtles").click(function(){
    $("#turtleinfo").show();
    $("#snakeinfo").hide();
    $("#inariinfo").hide();
  });
  $("#snakes").click(function(){
    $("#turtleinfo").hide();
    $("#snakeinfo").show();
    $("#inariinfo").hide();
  });
  $("#inari").click(function(){
    $("#turtleinfo").hide();
    $("#snakeinfo").hide();
    $("#inariinfo").show();
  });
});
