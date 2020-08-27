$(document).ready(function () {
    window.onscroll = function () { applySticky() };

    var navMenu = document.getElementById("nav-menu");
    var sticky = navMenu.offsetTop;

    function applySticky() {
        if (window.pageYOffset >= sticky) {
            navMenu.classList.add("sticky")
        } else {
            navMenu.classList.remove("sticky");
        }
    }

    // $(window).scroll(function () {
    //     if (window.pageYOffset >= $("#nav-menu").offset().top) {
    //         $("#nav-menu").addClass("sticky");
    //     } else {
    //         $("#nav-menu").removeClass("sticky");
    //     }
    // });
});