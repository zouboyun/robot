require(['robot'], function(Robot){
  
  var bobby = new Robot(150, 150, 'Bobby');
  var clark = new Robot(450, 150, 'Clark');

  var canvas = document.getElementById("MyCanvas");
  var context = canvas.getContext("2d");

  var drawRobot = function(robot) {
    drawBox(robot.getBody());
    drawBox(robot.getHead());
  }

  function eraseCanvas(){
    context.beginPath();
    context.fillStyle = "White";
    context.fillRect(0, 0, 600, 300);
  }

  function drawBox(box){
    drawLine(box.leftLine());
    drawLine(box.rightLine());
    drawLine(box.topLine());
    drawLine(box.bottomLine());
  }

  function drawLine(line) {
    context.moveTo(line.start.x, line.start.y);
    context.lineTo(line.end.x, line.end.y);
    context.stroke();
  }

  setInterval(eraseCanvas, 1000);
  setTimeout(function(){
    setInterval(drawRobot, 1000, bobby);
  }, 500);
  setTimeout(function(){
    setInterval(drawRobot, 1000, clark);
  }, 500);

});
