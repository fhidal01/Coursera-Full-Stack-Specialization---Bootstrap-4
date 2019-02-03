$(document).ready(function () {
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });

    $("#loginModalButton").click(function () {
        $('#loginModal').modal('toggle');
    });
    $("#loginClose").click(function () {
        $('#loginModal').modal('toggle');
    });

    $("#reserveTableButton").click(function () {
        $('#reserveTableModal').modal('toggle');
    });
    $("#reserveClose").click(function () {
        $('#reserveTableModal').modal('toggle');
    });
});
