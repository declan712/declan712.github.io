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
    })
    
});