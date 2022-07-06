$(document).ready(function() {
    $("button.header__button-more").click(function() {
        let elementClick = $(this).data("link"),
            destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 800);
        return false;
    });
});