$(window).load(function() {
	$(".alertStatus").css("line-height", $(".button").height() + "px");

	$(".meter").css("margin-left", ($(".meter").parent().width() - $(".meter").width()) / 2 + "px");
});
