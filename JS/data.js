function fetchData(){
	fetchLeft();
	fetchRight();
	writeData();
}

function fetchLeft(){    $.getJSON("https://api.particle.io/v1/devices/54ff71066672524822431867/fsrLeft?access_token=eef5a0cba3f7e74a20df3a6d9b49229ce8b54fc7", function(data) {

		window.dataL = data.result
	});
}

function fetchRight(){     $.getJSON("https://api.particle.io/v1/devices/54ff71066672524822431867/fsrRight?access_token=eef5a0cba3f7e74a20df3a6d9b49229ce8b54fc7", function(data) {

		window.dataR = data.result
	});
}

function writeData(data){
	dataL = window.dataL;
	dataR = window.dataR;
	$( ".content" ).append( "<p>" + dataL + ", " + dataR + "</p>" );
	$('html, body').animate({ scrollTop: $(document).height() }, 50);
}


setInterval(fetchData, 500);
