function fetchData(){
	fetchLeft();
	fetchRight();
	dataDisplay();
}

function fetchLeft(){    $.getJSON("https://api.particle.io/v1/devices/54ff71066672524822431867/fsrLeft?access_token=eef5a0cba3f7e74a20df3a6d9b49229ce8b54fc7", function(data) {

		window.dataL = data.result;
	});
}

function fetchRight(){     $.getJSON("https://api.particle.io/v1/devices/54ff71066672524822431867/fsrRight?access_token=eef5a0cba3f7e74a20df3a6d9b49229ce8b54fc7", function(data) {

		window.dataR = data.result;
	});
}

function writeData(data){
	dataL = window.dataL;
	dataR = window.dataR;
	$( ".content" ).append( "<p>" + dataL + ", " + dataR + "</p>" );
	$('html, body').animate({ scrollTop: $(document).height() }, 50);
}

function dataDisplay(){

	window.alertStatus = false;
	alertStatus = window.alertStatus;
	dataL = window.dataL;
	dataR = window.dataR;

	if (alertStatus === true){
		$(".alertStatus").css("background-color", "rgb(253, 228, 238)");
		$(".actualButton").css("fill", "rgb(200, 100, 100)");
	}

	else{
		$(".alertStatus").css("background-color", "rgb(228, 253, 238)");
		$(".actualButton").css("fill", "rgb(100, 200, 100)");
	}

	if (dataL != "undefined"){
		$(".leftContent").text(dataL);
		colorScale(".leftSandal", dataL, 200);
	}

	if (dataR != "undefined"){
		$(".rightContent").text(dataR);
		colorScale(".rightSandal", dataR, 200);
	}

	balanceScale(dataL, dataR);
}

function colorScale(svgBaseClass, data, max){
	red = (255 * data) / 100;
	green = (255 * (100 - data)) / 100;
	blue = 0;
	if ((data / max) > 1){
		opacity = 1;
	}
	else if((data / max) < 0){
		opacity = 0;
	}
	else{
		opacity = data / max;
	}

	redStrap = red * 1.05;
	redOutside = red * 0.95;
	greenStrap = green * 0.95;
	greenOutside = green * 1.05;

	if (green * 1.05 > 255){
		greenOutside = 255;
	}

	if (red * 1.05 > 255){
		redStrap = 255;
	}

  outsidePath = svgBaseClass + " .outsideShoe";
  insidePath = svgBaseClass + " .insideShoe";
  strapPath = svgBaseClass + " .strap";

	$(outsidePath).css("fill", "rgba(" + redOutside + "," + greenOutside + "," + blue + "," + opacity + ")");
	$(insidePath).css("fill", "rgba(" + red + "," + green + "," + blue + "," + opacity + ")");
	$(strapPath).css("fill", "rgba(" + redStrap + "," + greenStrap + "," + blue + "," + opacity + ")");

}

setInterval(fetchData, 800);


