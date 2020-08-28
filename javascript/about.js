$(document).ready(function () {
    function slideIn() {
        var scrollPos = $(document).scrollTop();
        var aboutPos = $("#about").position().top + ($("#about").position().top / 11);

        if (scrollPos >= aboutPos) {
            $(".content-grid-3 .skills").addClass("fade-right");
            $(".content-grid-4 .tech-stack").addClass("fade-left");
        }
    }

    $(window).mousewheel(function () {
        slideIn();
    });

    $(window).scroll(function () {
        slideIn();
    });
});