'use strict'

function main (){
  var cont = null;
  var canvas = null;
  
  function buildSplash (){
    cont = document.createElement('div');
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
    canvas = document.createElement ('canvas');
    canvas.setAttribute('id', 'canvas');
    cont.appendChild(canvas);
    playGame();

  }
  function playGame(){
    var ctx = canvas.getContext('2d')
    

  }

  function destroyGame(){
    // canvas.remove()

  }

  function buildRestart(){
  destroyGame()
  }

  buildSplash();
}
window.addEventListener('load', main)