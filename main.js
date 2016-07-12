$(document).ready(function(){
  function scroll (){
    var top = document.getElementsByClassName('navbar');
    var ypos = window.pageYOffset;
    if(ypos > 25){
      top.style.height = "#07a8c5";
    }
        else {
          top.style.background = "transparent";
              };
            };
  window.addEventListener("scroll",scroll);

});

(function(){

    var documentEl = $(document),
       parallaxBg = $('.container');

        documentEl.on('scroll', function() {
          var currScrollPos = documentEl.scrollTop();
          parallaxBg.css('background-position', '0 ', + -currScrollPos/2 + 'px');
      });
    });
