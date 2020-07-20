$(document).ready(function () {
    var images = ['1', '2', '3', '4', '5', '6'];
    var i = images.length;
    --i;
    function slider() {
        $("#sliderImg").fadeIn(2000).fadeOut(2000);
        if (i < images.length)
            ++i;
        else
            i = 1;
        $("#sliderImg").attr("src", "images/" + images[i - 1] + ".jpg");
    }
    slider();
    var interval_var = setInterval(slider, 4000);

    $(window).focus(function () {
        if (!interval_var)
            interval_var = setInterval(slider, 4000);
    });

    $(window).blur(function () {
        clearInterval(interval_var);
        interval_var = 0;
    });

    function nextImg() {
        if (i < images.length)
            ++i;
        else
            i = 1;
        $("#sliderImg").attr("src", "images/" + images[i - 1] + ".jpg");
    }
    function preImg() {
        if (i < images.length + 1 && i > 1)
            --i;
        else
            i = images.length;
        $("#sliderImg").attr("src", "images/" + images[i - 1] + ".jpg");
    }

    $("#Previous").click(function () {
        preImg();
    });

    $("#Next").click(function () {
        nextImg();
    });
});