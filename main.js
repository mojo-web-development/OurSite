$(document).ready(function(){
  function scroll (){
    var top = document.getElementsByClassName('navbar');
    var ypos = window.pageYOffset;
    if(ypos < 0){
      top.style.height = "transparent";
    }
        else {
          top.style.background = "#07a8c5";
              };
            };
  window.addEventListener("scroll",scroll);

});
