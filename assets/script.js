var today = moment() .format('LLLL');
$("#currentDay").html(today);

function background () {
    var currentHour = moment (). hours();

    $(".time-block").each(function() {
        var divTimeId = parseInt($(this).attr("id"));

        if (divTimeId < currentHour) {
            $(this).addClass("past");
        } else if (divTimeId === currentHour) {
            $(this).removeClass("past");
            $(this).removeClass("furture");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }
    })
}

background ();

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).sibling(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })
});


$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));