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
  this.isEnded = false;
  this.cb = null;
}

Game.prototype.start = function(cb) {
  this.cb = cb;
  this.isotope = new Isotope(this.ctx,this.canvasSize);
  this.doFrame();
}
Game.prototype.drawHitBoxes = function() {
  var self = this;
  this.hitBoxes.forEach(function(hitBox){
    self.ctx.fillRect(hitBox.cornerX, hitBox.cornerY, 40, 40);
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
  var hitBoxRight = newHit.cornerX + 40;
  var hitBoxTop = newHit.cornerY;
  var hitBoxBottom = newHit.cornerY + 40;
  

  if ((hitBoxBottom > isotopeTop && hitBoxBottom < isotopeBottom || hitBoxTop > isotopeTop && hitBoxTop < isotopeBottom) &&
      (hitBoxLeft > isotopeLeft && hitBoxLeft < isotopeRight || hitBoxRight > isotopeLeft && hitBoxRight < isotopeRight))
  {
    console.log ("collision")
    this.cb();
  }
}

Game.prototype.doFrame = function () {
  var self = this;

  self.draw();

  window.requestAnimationFrame(function() {
    self.doFrame();
  });
}
