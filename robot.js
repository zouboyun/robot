define(['coordinate', 'box'], function(Coordinate, Box){
  // var Coordinate = Wonderland.Coordinate;
  // var Box = Wonderland.Box;
  var bodyWidth = 140;
  var bodyHeight = 80;
  var headWidth = 100;
  var headHeight = 50;
  var neckLength = 10;
  var Robot = function(x, y, name) {
    this.x = x;
    this.y = y;
    this.name = name;
    this.getBody = function() {
      var leftX = this.x - bodyWidth / 2;
      var rightX = this.x + bodyWidth / 2;
      var topY = this.y - bodyHeight / 2;
      var bottomY = this.y + bodyHeight / 2;
      var topLeft = new Coordinate(leftX, topY);
      var bottomRight = new Coordinate(rightX, bottomY);
      return new Box(topLeft, bottomRight);
    }
    this.getHead = function() {
      var leftX = this.x - headWidth / 2;
      var rightX = this.x + headWidth / 2;
      var topY = this.y - bodyHeight / 2 - neckLength - headHeight;
      var bottomY = this.y - bodyHeight / 2 - neckLength;
      var topLeft = new Coordinate(leftX, topY);
      var bottomRight = new Coordinate(rightX, bottomY);
      return new Box(topLeft, bottomRight);
    }
  }
  return Robot;
});
