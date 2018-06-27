'use strict'

function Game (ctx,canvasWidth,canvasHeight){
  this.ctx = ctx;
  this.canvasSize = {
    width: canvasWidth,
    height: canvasHeight
  };
  this.hitBoxes = [];
  // this.reestart
  this.isotope = null;
}

Game.prototype.start = function() {
  this.isotope = new Isotope(this.ctx,this.canvasSize);
  this.doFrame();
}
Game.prototype.drawHitBoxes = function() {
  var self = this;
  this.hitBoxes.forEach(function(hitBox){
    self.ctx.fillRect(hitBox.cornerX, hitBox.cornerY, 20, 20);
  })

}

Game.prototype.draw = function() {
  this.isotope.draw();
  this.drawHitBoxes();
}
Game.prototype.checkIfCollision (){
  var isotopeLeft = this.isotope.position.x,
  var isotopeRight = this.isotope.position.x + this.size.width,
  var isotopeTop = this.isotope.position.y,
  var isotopeBottom = this.isotope.position.y + this.size.height,


  var playerClickLeft = this.
  var playerClickRight =this.
  var playerClickTop =this.
  var playerClickBottom = this.
}

if (PlayerClickRight> IsotopeLeft && IsotopeLeft>PlayerClickLeft){






Game.prototype.doFrame = function () {
  var self = this;

  // self.checkIfCollision();
  self.draw();
  window.requestAnimationFrame(function() {
    self.doFrame();
  });
}
