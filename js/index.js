AOS.init({
    duration: 500,
    offset: 200,
});

$(function(){
    var on = true;
    $(".trigger").click(function(){
        $(".navMenu").slideToggle();
    });

    $(".trigger").click(function(){
        if(on === true) {
            $(".banner").animate({
                "top" : "10px"
            });

            $("header").animate({
                "height" : "900px"
            });

            $(".cross").show();
            $(".menu").hide();

            on = false;
        }
        else {
            $(".banner").animate({
                "top" : "100px"
            });

            $("header").animate({
                "height" : "700px"
            });

            $(".cross").hide();
            $(".menu").show();
            on = true;
        }
    });

    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 30,
        dotsSpeed: 500,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplaySpeed: 1000,
        dotsSpeed: 1000,
    })
});