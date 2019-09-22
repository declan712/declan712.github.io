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
    checkScroll();

    //scroll to about when clicked
    $("#primary-nav ul li:nth-of-type(2) a").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $('#about').offset().top }, 1000);
    });
    //scroll to contact when clicked
    $("#primary-nav ul li:nth-of-type(3) a").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $('#contact').offset().top }, 1000);
    });
    $("#top-button").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $('header').offset().top }, 1000);
    })
    
});