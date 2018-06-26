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
Game.prototype.drawHitBoxes= function() {
  
}

Game.prototype.draw = function() {
  this.isotope.draw();
  this.drawHitBoxes();
}

Game.prototype.doFrame = function () {
  var self = this;

  self.draw();
  window.requestAnimationFrame(function() {
    self.doFrame();
  });
}