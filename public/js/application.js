$(document).ready(function() {

});

function Position(x, y){
  this.set_x(x)
  this.set_y(y)
}

Position.method('setX', function(x){
  this.x = x
  return x
})

Position.method('setY', function(y){
  this.y = y
  return y
})

Position.method('getX', function(){
  return this.x
})

Position.method('getY', function(){
  return this.y
})

function Box(x, y, color){
  this.setX(x)
  this.setY(y)
  this.setColor(color)
}

Box.inherits(Position)

Box.method('setColor', function(color){
  this.color = color
  return this.color
})

