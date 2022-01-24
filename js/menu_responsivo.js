$(window).on('load', function () {
    $('.mobile-menu').click(function () {
        $(this).find('ul').slideToggle();
    });
})