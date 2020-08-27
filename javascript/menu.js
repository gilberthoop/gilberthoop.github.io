$(document).ready(function () {

    $("#hamburger").on("click", function () {
        var links = $("#links");

        if (links.css("display") === "block") {
            links.css("display", "none");
            console.log("display", "none");
        } else {
            links.css("display", "block");
            console.log("display", "block");
        }
    })


    $("#menu-links li").on("click", function () {
        // De-activate the other links
        $("#menu-links li").removeClass("active");

        // Make the selected link active
        $(this).addClass("active");
    });

});
