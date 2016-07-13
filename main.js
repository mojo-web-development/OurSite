
var container;
var ypos;

function parralax (){

  ypos = window.pageYOffset;
  container = document.getElementById('container');

  container.style.top  = ypos * .4 + 'px';
    });
    window.addEventListener("scroll",parralax);
