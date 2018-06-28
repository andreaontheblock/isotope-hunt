'use strict'

function Isotope(ctx,canvasSize){
  this.size = {
    width: 90,
    height: 90,
  };
  this.ctx = ctx;
  this.canvasSize = canvasSize;
  this.position = {
    x: Math.floor(Math.random() * (this.canvasSize.width - this.size.width)),
    y: Math.floor(Math.random() * (this.canvasSize.height-this.size.height))
  };
  this.isActive = false;
  
  this.image = new Image();
  this.image.src = "./images/shiny-green-rock.png";
}


Isotope.prototype.draw = function() {
  this.ctx.drawImage(this.image,this.position.x,this.position.y, 90,90);
}