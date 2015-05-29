$(window).load(function() {
	$(".actualButton").css("height", $(".actualButton").width() + "px");

	$(".alertStatus").css("line-height", $(".button").height() + "px");

	$(".meter").css("margin-left", ($(".meter").parent().width() - $(".meter").width()) / 2 + "px");


	if (screen.width > 1200){

		$(".imageHolder").outerHeight($(".infoHolder").outerHeight());

		leftHeight = $(".imageHolder").height();
		$(".balanceScale").css("margin-top", "7%");
		$(".balanceScale").height(leftHeight * 0.09);
		$(".meter").css({
			width: leftHeight * 0.09 * 1.5,
			height: leftHeight * 0.09 * 1.5,
			top: leftHeight * 0.09 * -0.25,
		});


		$(".meter").css("margin-left", ($(".meter").parent().width() - $(".meter").width()) / 2 + "px");


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

});
