  var video = [
  "https://openload.co/embed/sMbAFBZyTdE/", 
  "https://openload.co/embed/GSuAUGgnptE/", 
  "https://openload.co/embed/EjSqla0yIKY/",
  "https://openload.co/embed/2CmJ12ke8zo/",
  "https://www.flashx.tv/embed-ppyyr15j81se.html",
  "https://www.flashx.tv/embed-k6eqx701v7g6.html",
  "https://www.flashx.tv/embed-ylwxw0qt6y39.html",
  "https://www.flashx.tv/embed-dk5aey3l699g.html",
  "https://www.flashx.tv/embed-lhy9300r11o7.html",
  "https://www.flashx.tv/embed-lmfshogclyti.html"
  ];
  
    var nadpis = [
	"první epizoda",
	"druhá epizoda",
	"třetí epizoda",
	"čtvrtá epizoda",
	"pátá epizoda",
	"šestá epizoda",
	"sedmá epizoda",
	"osmá epizoda",
	"devátá epizoda",
	"desátá epizoda"
  ];
  
 
  var num = 0;

function next() {
	num++;
	if(num >= video.length) {
    num = 0;
  }
  $(".videos").attr("src", video[num]);
  $("#carousel h2").text(nadpis[num]);

  }

function prev() {
  num--;
  if(num < 0) {
    num = video.length-1;
  }
  $(".videos").attr("src", video[num]);
  $("#carousel h2").text(nadpis[num]);
}

  $( "#previous" ).click(function(e) {
      e.preventDefault();
      $('.animation').addClass( "slideInRight" ).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
          $('.animation').removeClass( "slideInRight" );
      });
  });

  $( "#next" ).click(function(e) {
      e.preventDefault();
      $('.animation').addClass( "slideInLeft" ).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
          $('.animation').removeClass( "slideInLeft" );
      });
  });