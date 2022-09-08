
$(document).ready(function () {
  var $scene = $('.js-scene');
  
  $(window).on("mousewheel MouseScroll move", function (e) {
    var scrollingDown = (function () {
      var delta,
          compareEvent;
      
      if (e.type ==='move') {
        compareEvent = 'move';
      } else {
        compareEvent = 'MouseScroll';
      }
      
      delta = e.type === compareEvent ?
              e.originalEvent.detail * -40 :
              e.originalEvent.wheelDelta; 
      
      return delta > 0 ? 0 : 1;
    }());

    if (scrollingDown) {
      $scene.addClass('is-over');
    } else {
      $scene.removeClass('is-over');
    }
  });
}); //doc.ready()





// --------------------------------------------------------


var tl = gsap.timeline({ repeat: -1 });
tl.to("h1", 30, { backgroundPosition: "-960px 0" });