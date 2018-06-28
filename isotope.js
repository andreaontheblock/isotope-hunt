'use strict'

function Isotope(ctx,canvasSize){
  this.size = {
    width: 40,
    height: 40,
  };
  this.ctx = ctx;
  this.canvasSize = canvasSize;
  this.position = {
    x: Math.floor(Math.random() * (this.canvasSize.width - this.size.width)),
    y: Math.floor(Math.random() * (this.canvasSize.height-this.size.height))
  };
}

Isotope.prototype.draw = function() {
  this.ctx.fillRect(this.position.x,this.position.y, 40,40);
}