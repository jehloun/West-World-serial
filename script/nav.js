

/*navigace*/
$(window).scroll(function() {
    var kontaktujteNas

    if ($( document ).width() > 543) {  //o�et�en� velikosti za��zen�, na efekty v navigaci (ale pouze p�i skrolov�n�)
        if ($(window).scrollTop() > 1 && $(window).scrollTop() < $("#kontakt").offset().top - 1) {
            $('nav').fadeOut();
        } else {
            $('nav').fadeIn();
        }

        if ($(window).scrollTop() > $("#kontakt").offset().top - 1) {
            $('nav').css("background-color","rgba(255, 255, 255, 0.9)");

            $('.nav-link').css("color","#171A21");
            $('.dropdown-menu li a').css("color","#171A21");
            $('.navbar-brand').css("color","#171A21");
            $('.dropdown-menu').css("background-color","rgba(255, 255, 255, 0.9)");

        } else {
            $('nav').css("background-color","rgba(0, 0, 0, 0.3)");

            $('.nav-link').css("color","white");
            $('.dropdown-menu li a').css("color","white");
            $('.navbar-brand').css("color","white");
            $('.dropdown-menu').css("background-color","rgba(0, 0, 0, 0.3)");
        }
    }

    else {

    }
});


$(".nav-kontakt").click(function() {
    $('html, body').animate({
        scrollTop: $("#kontakt").offset().top
    }, 2000);
});

$(".nav-prvniserie").click(function() {
    $('html, body').animate({
        scrollTop: $("#carousel").offset().top
    }, 2000);
});

$(window).resize(function() {  // p�i zm�n�n� velikosti okna
    if ($( document ).width() < 543) {

    }

    else {

    }

    if ($(window).scrollTop() > $( window ).height()) {


    } else {

    }
});

$(window).ready(function() { // kdy� je v�e p�ipraven�


});