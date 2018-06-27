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

Game.prototype.checkIfCollision = function(newHit){
  var isotopeLeft = this.isotope.position.x;
  var isotopeTop = this.isotope.position.y;
  var isotopeRight = this.isotope.position.x + this.isotope.size.width;

  var isotopeBottom = this.isotope.position.y + this.isotope.size.height;

  var hitBoxLeft = newHit.cornerX;
  var hitBoxRight = newHit.cornerX + 20;
  var hitBoxTop = newHit.cornerY;
  var hitBoxBottom = newHit.cornerY + 20;
  


  

  // if (
  //   isotopeRight<hitBoxRight && 
  //   isotopeBottom > hitBoxTop && 
  //   isotopeBottom<hitBoxTop && 
  //   isotopeRight> hitBoxLeft){
  //   console.log ("collision")
  // }

  if ((hitBoxBottom > isotopeTop && hitBoxBottom < isotopeBottom || hitBoxTop > isotopeTop && hitBoxTop < isotopeBottom) &&
      (hitBoxLeft > isotopeLeft && hitBoxLeft < isotopeRight || hitBoxRight > isotopeLeft && hitBoxRight < isotopeRight))
  {
    console.log ("collision")
  }
 
}








Game.prototype.doFrame = function () {
  var self = this;

  // self.checkIfCollision();
  self.draw();

  window.requestAnimationFrame(function() {
    self.doFrame();
  });
}
