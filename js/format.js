$(window).load(function() {
	$(".meter").css("margin-left", ($(".meter").parent().width() - $(".meter").width()) / 2 + "px");


	load();
});

function load(){
	//
	//	Formatting stuff that applies to mobile too below
	//

	$(".actualButton").css("height", $(".actualButton").width() + "px");
	$(".alertStatus").css("line-height", $(".button").height() + "px");

	//
	// Graph stuff below
	//

	$(".graphContent").css("height", $(".graphContent").width() + "px");

	$(".graphBox").css("width", $(".graphBox").parent().width() / 2 + "px");
	$(".graphBox").css("height", $(".graphBox").parent().width() / 2 + "px");

	$(".quad").css("height", $(".quad").parent().height()/2 + "px");

	$('.circle').each(function(i, obj) {
		$(this).css("margin-top", ($(this).parent().width() - $(this).height()) / 2 + "px");
		$(this).css("margin-left", ($(this).parent().width() - $(this).height()) / 2 + "px");
	});

	$(".leftFront").css({
		width: $(".leftFront").parent().width() * window.graphLeftFront / 200 + "px",
		height: $(".leftFront").parent().width() * window.graphLeftFront / 200 + "px",
	});
	$(".leftBack").css({
		width: $(".leftFront").parent().width() * window.graphLeftBack/ 200 + "px",
		height: $(".leftFront").parent().width() * window.graphLeftBack / 200 + "px",
	});
	$(".rightBack").css({
		width: $(".leftFront").parent().width() * window.graphRightBack/ 200 + "px",
		height: $(".leftFront").parent().width() * window.graphRightBack / 200 + "px",
	});

	$(".graphKey").css("margin-top", ($(".graphContent").width() - $(".graphKey").height()) / 2 + "px");


	//
	//	Formatting stuff below
	//

	//$(".meter").css("margin-left", ($(".meter").parent().width() - $(".meter").width()) / 2 + "px");


	if (screen.width > 1200){

		$(".imageHolder").outerHeight($(".infoHolder").outerHeight());

		leftHeight = $(".imageHolder").height();
		$(".balanceScale").css("margin-top", "12%");
		$(".balanceScale").height(leftHeight * 0.05);
		$(".meter").css({
			width: leftHeight * 0.05 * 1.5,
			height: leftHeight * 0.05 * 1.5,
			top: leftHeight * 0.05 * -0.25,
		});

		//$(".deskTopOnly").css("margin-top", ($(".deskTopOnly").parent().height() - $(".leftSandal").height() - $(".balanceScale").height())/2);

		//$(".meter").css("margin-left", ($(".meter").parent().width() - $(".meter").width()) / 2 + "px");


		/* This stuff was for when the right side was smaller than the left side on desktop.

		$(".infoHolder").height($(".imageHolder").outerHeight() * 1);

		$(".imageHolder").outerHeight($(".imageHolder").outerHeight());

		//$(".footInfo").css("margin-bottom", ($(".imageHolder").outerHeight() - $(".infoHolder").height()) + 30 + "px");

		//$(".footInfo").css("margin-bottom", ($(".imageHolder").css("height") - $(".footInfo").outerHeight() - $(".alertInfo").outerHeight()) + 30 + "px");

		//$(".footInfo").css("margin-bottom", (parseFloat($(".imageHolder").css("height")) + 2 * parseFloat($(".imageHolder").css("padding-top")) - $(".footInfo").outerHeight() + 30 - $(".alertInfo").outerHeight()) + "px");

		$(".alertInfo").css("margin-top", $(".infoHolder").height() - $(".footInfo").outerHeight() - $(".alertInfo").outerHeight() - 33 + "px");

		*/
	}

	//$(".alertInfo").height($(".alertInfo").height() + 6);

}
