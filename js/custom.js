$(function () {

    // animate on scroll
    new WOW().init();
});

/*====================================================
                        NAVIGATION
====================================================*/
// Show/Hide transparent black navigation
$(function () {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = (function() {
    var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("vesco-nav-wrapper").style.top = "0";
      } else {
        document.getElementById("vesco-nav-wrapper").style.top = "-50px";
      }
      prevScrollpos = currentScrollPos;
    });
});
/*

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("vesco-top-nav").style.top = "0";
  } else {
    document.getElementById("vesco-top-nav").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
*/ 
// Smooth scrolling
$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // get/return id like #about, #work, #team and etc
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});

// Close mobile menu on click
$(function(){
    
    $(".navbar-collapse ul li a").on("click touch", function(){
       
        $(".navbar-toggle").click();
    });
});

