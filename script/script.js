

$(window).resize(function() {  // p�i zm�n�n� velikosti okna
  if ($( document ).height() > 600 && $( document ).width() > 543) {
    $('section').css("min-height",$( window ).height());
  }
  
  else {
    $('section').css("min-height","600");
}
});

     $(window).ready(function() { // kdy� je v�e p�ipraven�
  $('section').css("min-height",$( window ).height());

});
