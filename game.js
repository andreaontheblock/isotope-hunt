'use strict'

function Game (ctx, cb, canvasWidth,canvasHeight){
  this.ctx = ctx;
  this.canvasSize = {
    width: canvasWidth,
    height: canvasHeight
  };
  this.hitBoxes = [];
  // this.reestart
  this.isotope = null;
  this.callback = cb;

  this.endTempisActive = false
  this.endTemp = 0
  this.mortyImage = new Image();
  this.mortyImage.src = "./images/scared-morty.png";

  this.myMan = new Audio();
  this.myMan.src = './sounds/myman.mp3'

  this.humanMusic = new Audio();
  this.humanMusic.src = './sounds/myman.mp3'


}

Game.prototype.start = function() {
  this.isotope = new Isotope(this.ctx,this.canvasSize);
  this.doFrame();
}
Game.prototype.drawHitBoxes = function() {
  var self = this;
  this.hitBoxes.forEach(function(hitBox){
    self.ctx.drawImage(self.mortyImage ,hitBox.cornerX, hitBox.cornerY, 40, 40);
  })

}

Game.prototype.draw = function() {
  if(this.isotope.isActive === true){
    this.isotope.draw();
  }
  this.drawHitBoxes();
}
Game.prototype.checkIfEnded = function(){
  console.log(this.endTemp)
  if(this.endTemp > 100){
    this.callback();
  }
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
    this.isotope.isActive = true
    this.endTempisActive = true;
    this.myMan.play();
  }
}

Game.prototype.doFrame = function () {
  var self = this;
  
  if(self.endTempisActive === true){
    self.endTemp ++;
    // console.log(self.endTemp);
  }
  self.checkIfEnded();

  self.draw();

  window.requestAnimationFrame(function() {
    if(self.endTemp <= 100){
      self.doFrame();
    }
  });
}
