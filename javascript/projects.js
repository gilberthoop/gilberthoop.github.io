$(document).ready(function () {
    $("#all").on("click", function () {
        $(".node").removeClass("invisible");
        $(".php").removeClass("invisible");
        $(".node").removeClass("showup");
        $(".php").removeClass("showup");
    });

    $("#node").on("click", function () {
        $(".node").removeClass("invisible");
        $(".node").addClass("showup");
        $(".php").addClass("invisible");
        $(".php").removeClass("showup");
    });

    $("#php").on("click", function () {
        $(".php").removeClass("invisible");
        $(".php").addClass("showup");
        $(".node").addClass("invisible");
        $(".node").removeClass("showup");
    });
});