'use strict'

function main (){
  var cont = null;
  var canvas = null;
  var game = null;
  var canvasWidth = 500;
  var canvasHeight = 300;


  function buildSplash (){
    cont = document.createElement('div');
    cont.setAttribute('id','main-container')
    cont.innerHTML= `<h1>START PLAYING</h1>
    <button id='btn-start'>CLICK HERE</button>`
    document.body.appendChild(cont);
    var btn = document.getElementById('btn-start');
    btn.addEventListener ('click', destroySplash);
  }

  function destroySplash (){
    cont.remove();
    buildGame();
  
  }

  function buildGame (){
    cont = document.createElement('div');
    cont.setAttribute('id','game-container')
    document.body.appendChild(cont)
    canvas = document.createElement('canvas');
    canvas.setAttribute('id', 'canvas');
    canvas.setAttribute('width', canvasWidth + 'px');
    canvas.setAttribute('height', canvasHeight + 'px');
    cont.appendChild(canvas);
    playGame();

  }
  function playGame(){
    var ctx = canvas.getContext('2d');
    game = new Game(ctx,canvasWidth,canvasHeight);
    canvas.addEventListener('click', handleMouseClick)
    game.start(destroyGame)
    // var test = setTimeout(function(){
    //   destroyGame();
    // }, 3000)
  }

  function handleMouseClick(event) {
    var x = event.clientX - 50;
    var y = event.clientY

    var newHit = {
      centerX: x,
      centerY: y,
      cornerX: x - 10,
      cornerY: y - 10
    }
    // console.log("Position X Mouse = " + newHit.centerX);
    // console.log("Position Y Mouse = " + newHit.centerY);
    game.hitBoxes.push(newHit);
    game.checkIfCollision(newHit);
  }

  function destroyGame(){
    cont.remove();
    buildRestart()
  }


  function buildRestart(){
    cont = document.createElement('div');
    cont.setAttribute('id','restart-container');
    document.body.appendChild(cont);
    cont.innerHTML= `<h1>RESTART</h1>
    <button id='btn-restart'>CLICK HERE</button>`
    var btn = document.getElementById('btn-restart');
    btn.addEventListener ('click', destroySplash);
   
  }

   buildSplash()
}
window.addEventListener('load', main)