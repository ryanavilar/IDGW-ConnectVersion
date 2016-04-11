if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        document.getElementById("marketSlider").setAttribute("id", "marketSlider2");
        document.getElementById("jobSlider").setAttribute("id", "jobSlider2");
        document.getElementById("accomSlider").setAttribute("id", "accomSlider2");
}

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 80) {
        //$('.navbar').removeClass('navbar-static-top');
        $('.navbar').addClass('animate');
        $('.navbar').addClass('navbar-fixed-top');
    } else {
        $('.navbar  ').removeClass('navbar-fixed-top');
        $('.navbar').removeClass('animate');
        //$('.navbar').addClass('navbar-static-top');
    }
});