$(document).ready(function() {

    $(".expand-study").click(function(event) {
        event.preventDefault();
        $(this).parent().children().removeClass("hidden");
    });
    $(".collapse-study").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("hidden");
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
            var margWidth = $(this).parent().children(".slider-images").children().css("width");
            var newMarg = parseInt(currMarg) + (parseInt(margWidth)+18);
            currMarg = $(this).parent().children(".slider-images").css("margin-left",newMarg+"px");
        } else {
            $(this).parent().children(".slider-images").css("margin-left","0px");
        }
    });
});