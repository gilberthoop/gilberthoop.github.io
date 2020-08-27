AOS.init({
    disable: function () {
        var maxWidth = 670;
        return window.innerWidth <= maxWidth;
    }
});