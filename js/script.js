function checkScroll() {
    var scrollPos = $(document).scrollTop();
    if (scrollPos > 200) {
        $("#primary-nav").addClass("scrolling");
    } else {
        $("#primary-nav").removeClass("scrolling");
    }
    setTimeout(checkScroll,250);
}




$(document).ready(function(event) {
    if (window.location.hash) {
        
        var hash = window.location.hash;
        console.log(hash);
        $('html, body').animate({
            scrollTop :  $(hash).offset().top
        }, 1000);
    };

    $('a[href^="#"]').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : $(this.hash).offset().top
        }, 500);
    });

    $(".expand").click(function(event) {
        $(this).parent().children().removeClass("hidden");
        $(this).hide();
    });
    $(".contract").click(function(event) {
        $(this).parent().addClass("hidden");
        $(this).parent().parent().children(".expand").show();
        $('html, body').animate({
            scrollTop : $(this).parent().parent().offset().top-50},500);
    });





    checkScroll();

    //scroll to about when clicked
    // $("#primary-nav ul li:nth-of-type(2) a").click(function(event) {
    //     event.preventDefault();
    //     $("html, body").animate({ scrollTop: $('#about').offset().top }, 1000);
    // });
    //scroll to contact when clicked
    // $("#primary-nav ul li:nth-of-type(3) a").click(function(event) {
    //     event.preventDefault();
    //     $("html, body").animate({ scrollTop: $('#contact').offset().top }, 1000);
    // });
    //scroll to top
    $("#top-button").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $('header').offset().top }, 500);
    });

    $(".slider .next").click(function(event) {
        event.preventDefault();
        var currImg = $(this).parent().children(".slider-images").children(".active");
        var nextImg = currImg.next();

        if (nextImg.length) {
            var margWidth = $(this).parent().children(".slider-images").children(".active").css("width");
            currImg.removeClass("active");
            nextImg.addClass("active");
            currMarg = $(this).parent().children(".slider-images").css("margin-left");
            var newMarg = parseInt(currMarg) - (parseInt(margWidth)+21);
            currMarg = $(this).parent().children(".slider-images").css("margin-left",newMarg+"px");
        }
    });
    $(".slider .prev").click(function(event) {
        event.preventDefault();
        var currImg = $(this).parent().children(".slider-images").children(".active");
        var prevImg = currImg.prev();

        if (prevImg.length) {
            currImg.removeClass("active");
            prevImg.addClass("active");
            currMarg = $(this).parent().children(".slider-images").css("margin-left");
            var margWidth = $(this).parent().children(".slider-images").children(".active").css("width");
            var newMarg = parseInt(currMarg) + (parseInt(margWidth)+18);
            currMarg = $(this).parent().children(".slider-images").css("margin-left",newMarg+"px");
        } else {
            $(this).parent().children(".slider-images").css("margin-left","0px");
        }
    });
    $(".slider img").click(function() {
        var src = $(this).attr("src");
        $(".lightbox-content").attr("src",src);
        $(".lightbox").removeClass("hidden");
        $("body").css("overflow-y","hidden");
    });
    $(".close-lightbox").click(function() {
        $(".lightbox").addClass("hidden");
        $("body").css("overflow-y","scroll");
    });
    
});