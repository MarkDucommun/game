$(document).ready(function() {
  var one = new Box(0, 0, 'red')
  one.paint()
  $(document).on('keyup', function(e){
    if(e.keyCode == 65){
      console.log('left')
      one.move(one.getX() - 1, one.getY())
    }
    if(e.keyCode == 87){
      console.log('up')
      one.move(one.getX(), one.getY() + 1)
    }
    if(e.keyCode == 68){
      console.log('right')
      one.move(one.getX() + 1, one.getY())
    }
    if(e.keyCode == 83){
      console.log('down')
      one.move(one.getX(), one.getY() - 1)
    }
  })
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
    this.unpaint()
    this.setX(x)
    this.setY(y)
    this.paint()
  },

  paint : function(){
    var square = $('#sq' + (this.getY() * 4 + this.getX()))
    square.css('background', this.getColor())
  },

  unpaint : function(){
    var square = $('#sq' + (this.getY() * 4 + this.getX()))
    square.css('background', 'none') 
  }
}

function Box(x, y, color){
  Position.call(this, x, y, color)
}

Box.prototype = Object.create(Position.prototype, {
 
})

function Obstacle(x, y, color){
  Position.call(this, x, y, color)
}