define(['coordinate', 'line'], function(Coordinate, Line){
  var Box = function(topLeft, bottomRight) {
    this.topLeft = topLeft;
    this.bottomRight = bottomRight;
    this.leftLine = function() {
      var start = new Coordinate(this.topLeft.x, this.topLeft.y);
      var end = new Coordinate(this.topLeft.x, this.bottomRight.y);
      var line = new Line(start, end);
      return line;
    }
    this.rightLine = function() {
      var start = new Coordinate(this.bottomRight.x, this.topLeft.y);
      var end = new Coordinate(this.bottomRight.x, this.bottomRight.y);
      var line = new Line(start, end);
      return line;
    }
    this.topLine = function() {
      var start = new Coordinate(this.topLeft.x, this.topLeft.y);
      var end = new Coordinate(this.bottomRight.x, this.topLeft.y);
      var line = new Line(start, end);
      return line;
    }
    this.bottomLine = function() {
      var start = new Coordinate(this.topLeft.x, this.bottomRight.y);
      var end = new Coordinate(this.bottomRight.x, this.bottomRight.y);
      var line = new Line(start, end);
      return line;
    }
  }
  return Box;
});
