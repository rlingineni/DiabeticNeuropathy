window.dataLF = "Loading";
window.dataLB = "Loading";
window.dataL = "Loading";
window.dataRF = "Loading";
window.dataRB = "Loading";
window.dataR = "Loading";

function fetchData(){
	fetchLeft();
	fetchRight();
	dataDisplay();
}

function fetchLeft(){    $.getJSON("https://api.particle.io/v1/devices/54ff71066672524822431867/fsrLeft?access_token=eef5a0cba3f7e74a20df3a6d9b49229ce8b54fc7", function(data) {

		if (data.result != "undefined" && data.result != undefined && data.result != "" || data.result == 0){
			window.dataLF = data.result;
		}
	});
}

function fetchRight(){     $.getJSON("https://api.particle.io/v1/devices/54ff71066672524822431867/fsrRight?access_token=eef5a0cba3f7e74a20df3a6d9b49229ce8b54fc7", function(data) {

		if (data.result != "undefined" && data.result != undefined && data.result != "" || data.result == 0){
			window.dataLB = data.result;
		}
	});
}

function writeData(data){
	dataL = window.dataL;
	dataR = window.dataR;
	$( ".content" ).append( "<p>" + dataL + ", " + dataR + "</p>" );
	$('html, body').animate({ scrollTop: $(document).height() }, 50);
}

function dataDisplay(){

	dataLF = window.dataLF;
	dataLB = window.dataLB;
	dataRF = 0;
	dataRB = 0;
	//dataRF = window.dataLF;
	//dataRB = window.dataRB;

	if (dataLF != "Loading"){
		$(".leftContent").text("Front: " + dataLF + "lbs, " + $(".leftContent").text().split(", ")[1]);
	}

	if (dataLB != "Loading"){
		$(".leftContent").text($(".leftContent").text().split(", ")[0] + ", " + "Back: " + dataLB + "lbs");
	}

	if (dataLF != "Loading" && dataLB != "Loading" && dataRF != "Loading" && dataRB != "Loading"){
		bottomBalanceScale(dataLF + dataLB, dataRF + dataRB);
		checkAlertStatus();
	}

	if (dataLF != "Loading" && dataLB != "Loading"){
		colorScale(".leftSandal", dataLF, dataLB, 150);
	}

	load();
}

function checkAlertStatus(){

	if (dataLF > 0.4 * dataLB /*|| dataLF + 15 > dataLB*/){
		$(".alertInfo").css("background-color", "rgb(253, 228, 238)");
		$(".alertStatus").text("Alert!");
		//$(".actualButton").css("background-color", "rgb(200, 100, 100)");
		$( "#book" ).animate({
			width: [ "toggle", "swing" ],
			height: [ "toggle", "swing" ],
			opacity: "toggle"
		}, 5000, "linear");
	}

	else{
		$(".alertInfo").css("background-color", "rgb(228, 253, 238)");
		$(".alertStatus").text("No Alert");
		$(".actualButton").css("background-color", "rgb(100, 200, 100)");
	}

}


function bottomBalanceScale(dataL, dataR){
	center = (($(".meter").parent().width() - $(".meter").width()) / 2);
	if ((dataR - dataL) < 0){
		balancePosition = 0 + center;
	}
	else if ((dataR - dataL) > 200){
		balancePosition = 1 + center;
	}
	else{
		balancePosition = (dataR - dataL)/200 * center + center;
	}


	$(".meter").css("margin-left", balancePosition + "px");
}

function colorScale(svgBaseClass, dataF, dataB, max){
	redF = (255 * dataF) / 100;
	greenF = (200 * (100 - dataF)) / 100;
	blueF = 0;

	redB = (255 * dataB) / 100;
	greenB = (200 * (100 - dataB)) / 100;
	blueB = 0;

	redF = parseInt(redF);
	greenF = parseInt(greenF);
	blueF = parseInt(blueF);

	redB = parseInt(redB);
	greenB = parseInt(greenB);
	blueB = parseInt(blueB);

	if ((dataF / max) > 1){
		opacityF = 1;
	}
	else if((dataF / max) < 0){
		opacityF = 0.5;
	}
	else{
		opacityF = 0.5 + 0.5 * (dataF / max);
	}

	if ((dataB / max) > 1){
		opacityB = 1;
	}
	else if((dataB / max) < 0){
		opacityB = 0.5;
	}
	else{
		opacityB = 0.5 + 0.5 * (dataB / max);
	}


	redAvg = parseInt((redF + redB) / 2);
	greenAvg = parseInt((greenF + greenB) / 2);
	blueAvg = parseInt((blueF + blueB) / 2);
	opacityAvg = parseFloat((opacityF + opacityB) / 2);

	outsidePath = svgBaseClass + " .outsideShoe";
	insidePath = svgBaseClass + " .insideShoe";
	strapPath = svgBaseClass + " .strap";
	frontPath = svgBaseClass + " .topSensor";
	backPath = svgBaseClass + " .bottomSensor";


	$(outsidePath).css("fill", "rgba(" + redAvg + "," + greenAvg + "," + blueAvg + "," + opacityAvg * .5 + ")");
	$(insidePath).css("fill", "rgba(" + redAvg + "," + greenAvg + "," + blueAvg + "," + opacityAvg * 0.01 + ")");
	$(frontPath).css("fill", "rgba(" + redF + "," + greenF + "," + blueF + "," + opacityF + ")");
	$(backPath).css("fill", "rgba(" + redB + "," + greenB + "," + blueB + "," + opacityB + ")");

	$(outsidePath).css("stroke-width", "0px");
	$(insidePath).css("stroke-width", "0px");
	$(strapPath).css("stroke-width", "0px");
	$(frontPath).css("stroke-width", "0px");
	$(backPath).css("stroke-width", "0px");
}

setInterval(fetchData, 800);


