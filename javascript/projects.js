$(document).ready(function () {
    $("#all").on("click", function () {
        $(".node").removeClass("removed");
        $(".php").removeClass("removed");
    });


    $("#node").on("click", function () {
        $(".node").addClass("showup");

        $(".php").addClass("collapse");

        setTimeout(function () {
            $(".php").addClass("removed");
            $(".php").removeClass("showup");
        }, 200);
    });


    $("#php").on("click", function () {
        $(".php").addClass("showup");

        $(".node").addClass("collapse");

        setTimeout(function () {
            $(".node").addClass("removed");
            $(".node").removeClass("showup");
        }, 200);
    });
});