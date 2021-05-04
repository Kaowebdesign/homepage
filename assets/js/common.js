$(document).ready(function() {
    // Parallax elements
    var elem1= $('.main__parallax_name'),
        elem2= $('.main__parallax_last-name'),
        // top position
        elem2TopPos = elem2.offset().top,
        // main site container
        main = $('.main__loading');
    // Layers, use it for parallax speed
    var layer2s = 5,
        layer3s = 7;
    // Watch user scroll
    $(window).scroll(function(){
        // Animate first element
        elem1.css({'top': -$(window).scrollTop()/layer3s});
        // Animate second element
        elem2.css({'top': elem2TopPos - $(window).scrollTop()/layer2s});
    });
    // show page preloader
    main.addClass('loading');
    // hide page preloader
    setTimeout(function() {
        main.removeClass('loading');
    }, 1500);
});
