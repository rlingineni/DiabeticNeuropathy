window.dataLF = "Loading";
window.dataLB = "Loading";
window.dataL = "Loading";
window.dataRF = "Loading";
window.dataRB = "Loading";
window.dataR = "Loading";

window.allDataLF = {};
window.allDataLB = {};
window.allDataRF = {};
window.allDataRB = {};

window.allDataLFCount = 0;
window.allDataLBCount = 0;
window.allDataRFCount = 0;
window.allDataRBCount = 0;

window.dataLFAvg = 0;
window.dataLBAvg = 0;
window.dataRFAvg = 0;
window.dataRBAvg = 0;

window.lineChartData = {
	columns: [
		  ['L Foot Front Current Pressure', 0],
		  ['L Foot Back Current Pressure', 0]
	]
};

function fetchData(){
	fetchLeftFront();
	fetchLeftBack();
	fetchRightBack();
	dataDisplay();
}

function fetchLeftFront(){
	$.getJSON("https://api.particle.io/v1/devices/54ff71066672524822431867/fsrFront?access_token=eef5a0cba3f7e74a20df3a6d9b49229ce8b54fc7", function(data) {
		if (data.result !== NaN){
			window.dataLF = data.result;
		}
	});
}

function fetchLeftBack(){
	$.getJSON("https://api.particle.io/v1/devices/54ff71066672524822431867/fsrBack?access_token=eef5a0cba3f7e74a20df3a6d9b49229ce8b54fc7", function(data) {
		if (data.result !== NaN){
			window.dataLB = data.result;
		}
	});
}

function fetchRightBack(){
	$.getJSON("https://api.particle.io/v1/devices/54ff71066672524822431867/fsrRight?access_token=eef5a0cba3f7e74a20df3a6d9b49229ce8b54fc7", function(data) {
		if (data.result !== NaN){
			window.dataRB = data.result;
		}
	});
}

function pageScroll() {
	window.scrollBy(0,1);
	scrolldelay = setTimeout(pageScroll(),10);
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
	dataRB = window.dataRB;
	//dataRF = window.dataLF;
	//dataRB = window.dataRB;

	if (dataLF != "Loading"){
		$(".leftContent").html("Front: " + parseInt(dataLF * 59/1000) + " kPa, " + "<br>" + $(".leftContent").text().split(", ")[1]);
	}

	if (dataLB != "Loading"){
		$(".leftContent").html($(".leftContent").text().split(", ")[0] + ", " + "<br>" + "Back: " + parseInt(dataLB * 59/1000) + " kPa");
	}

	if (dataRB != "Loading"){
		$(".rightContent").html("Front: No Sensor" /*$(".rightContent").text().split(", ")[0]*/ + ", " + "<br>" + "Back: " + parseInt(dataRB * 59/1000) + " kPa");
	}



	if ((dataLF != "Loading" && dataLB != "Loading") || (dataRF != "Loading" && dataRB != "Loading")){
		tempArray = [dataLF, dataLB, dataRF, dataRB]
		for (i = 0; i < 4; i++){
			if (tempArray[i] == "Loading"){
				tempArray[i] = 0;
			}
		}

		temp1 = tempArray[0] + tempArray[1];
		temp2 = tempArray[2] + tempArray[3];

		bottomBalanceScale(temp1 , temp2);
		checkAlertStatus();
	}

	if (dataLF != "Loading" && dataLB != "Loading"){
		colorScale(".leftSandal", dataLF, dataLB, 250);
	}

	if (/*dataLF != "Loading" && */dataLB != "Loading"){
		colorScale(".rightSandal", /*dataLF*/"Disabled", dataLB, 250);
	}

	if (dataLF != "Loading"){
		allDataLFCount = allDataLFCount + 1;
		allDataLF[allDataLFCount] = dataLF;
		for (var i = 1; i < allDataLFCount; i++){
			dataLFAvg = dataLFAvg + allDataLF[i];
			window.lineChartData.columns[0].push(59/1000 * allDataLF[i]);
		}
		dataLFAvg = dataLFAvg / allDataLFCount;
		window.graphLeftFront = dataLFAvg;

	}

	if (dataLB != "Loading"){
		allDataLBCount = allDataLBCount + 1;
		allDataLB[allDataLBCount] = dataLB;
		for (var i = 1; i < allDataLBCount; i++){
			dataLBAvg = dataLBAvg + allDataLB[i];
			window.lineChartData.columns[1].push(59/1000 * allDataLB[i]);
			//window.lineChartData[1].values.push({"time": i, "y": allDataLB[i]});
			//window.lineChartData[1].values[i].y = allDataLB[i];
		}
		dataLBAvg = dataLBAvg / allDataLBCount;
		window.graphLeftBack = dataLBAvg;
	}

	if (dataRF != "Loading"){
		allDataRFCount = allDataRFCount + 1;
		allDataRF[allDataRFCount] = dataRF;
		for (var i = 1; i < allDataRFCount; i++){
			dataRFAvg = dataRFAvg + allDataRF[i];
			window.lineChartData.columns[0].push(59/1000 * allDataRF[i]);
		}
		dataRFAvg = dataRFAvg / allDataRFCount;
		window.graphLeftFront = dataRFAvg;

	}

	if (dataRB != "Loading"){
		allDataRBCount = allDataRBCount + 1;
		allDataRB[allDataRBCount] = dataRB;
		for (var i = 1; i < allDataRBCount; i++){
			dataRBAvg = dataRBAvg + allDataRB[i];
			window.lineChartData.columns[1].push(59/1000 * allDataRB[i]);
			//window.lineChartData[1].values.push({"time": i, "y": allDataLB[i]});
			//window.lineChartData[1].values[i].y = allDataLB[i];
		}
		dataRBAvg = dataRBAvg / allDataRBCount;
		window.graphRightBack = dataRBAvg;
	}

	/*
	Include this if you want a graph:
	var chart = c3.generate({
		bindto: '#graphA',
			data: window.lineChartData
	});

	*/
	$(".averageContent").html("L Front: " + parseInt((dataLFAvg * 59/*).toExponential(2*/)) + " Pa," + "<br>" + "L Back: " + parseInt((dataLBAvg * 59 /*).toExponential(2*/)) + " Pa" );

	load();
}

function checkAlertStatus(){

	if (dataLF > dataLB * .7 && dataLB > 40 /*|| dataLF + 15 > dataLB*/){
		$(".alertInfo").css("background-color", "rgb(253, 228, 238)");
		$(".alertStatus").text("Alert!");
		//$(".actualButton").css("background-color", "rgb(200, 100, 100)");
		$(".actualButton").animate({
				backgroundColor: "rgb(255, 155, 155)"
			}, 200, "linear", function() {
				$(".actualButton").animate({
						backgroundColor: "rgb(255, 0, 0)"
					}, 200, "linear"
				);
			}
		);
	}

	else{
		$(".alertInfo").css("background-color", "rgb(228, 253, 238)");
		$(".alertStatus").text("No Alert");
		$(".actualButton").css("background-color", "rgb(100, 200, 100)");
	}

}


function bottomBalanceScale(dataL, dataR){
	center = (($(".meter").parent().width() - $(".meter").width()) / 2);
	if (dataL == "Loading"){
		dataL = 0;
	}
	if (dataR == "Loading"){
		dataR = 0;
	}
	if ((dataR - dataL) < -250){
		balancePosition = 0 * center;
	}
	else if ((dataR - dataL) > 250){
		balancePosition = 2 * center;
	}
	else{
		balancePosition = (dataR - dataL)/250 * center + center;
	}


	$(".meter").css("margin-left", balancePosition + "px");
}

function colorScale(svgBaseClass, dataF, dataB, max){

	if(svgBaseClass == ".rightSandal" && dataF == "Disabled"){
		dataF = 0;
	}

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
		opacityF = 0.05 + 0.95 * (dataF / max);
	}

	if ((dataB / max) > 1){
		opacityB = 1;
	}
	else if((dataB / max) < 0){
		opacityB = 0.5;
	}
	else{
		opacityB = 0.05 + 0.95 * (dataB / max);
	}

	/*
	tempArray = [redF, greenF, blueF, opacityF, redB, greenB, blueB, opacityB]
	for (i = 0; i < 8; i++){
		if (tempArray[i] == NaN){
			tempArray[i] = 0;
		}
	}
	redF = tempArray[0];
	greenF = tempArray[1];
	blueF = tempArray[2];
	opacityF = tempArray[3];
	redB = tempArray[4];
	greenB = tempArray[5];
	blueB = tempArray[6];
	opacityB = tempArray[7];
	*/



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

	$(".rightSandal .topSensor").css("fill", "rgba(0,0,0,0)");
}

setInterval(fetchData, 800);


