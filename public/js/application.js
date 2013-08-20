$(document).ready(function() {
  var one = new Box(0, 0, 'red')
  one.paint()
});

function Position(x, y, color){
  this.setX(x)
  this.setY(y)
  this.setColor(color)
}

Position.prototype = {
  setX : function(x){
    this.x = x
    return x
  },

  setY : function(y){
    this.y = y
    return y
  },

  setColor : function(color){
    this.color = color
    return this.color
  },
  
  getX : function(){
    return this.x
  },

  getY : function(){
    return this.y
  },

  getColor : function(color){
    return this.color
  },

  move : function(x, y){
  },

  paint : function(){
    var square = $('#sq' + (this.getY() * 4 + this.getX()))
    square.css('background', this.getColor())
  }
}

function Box(x, y, color){
  Position.call(this, x, y, color)
}

Box.prototype = Object.create(Position.prototype, {
  move : function(x, y){
    this.setX(x)
    this.setY(y)
    this.paint()
  }
})

function Obstacle(x, y, color){
  this.position = new Position(x, y, color)
}



