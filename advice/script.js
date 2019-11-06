$(document).ready(function() {

	var URLadvice = "https://api.adviceslip.com/advice"
	var giveAdvice = function (data){
		var dataObject = JSON.parse(data);
		var advice = dataObject["slip"]["advice"];
		$("#advice-text").text(advice);
		console.log(data);
	}

	var getAdvice = function(){
		$.get(URLadvice, giveAdvice);
		console.log("hi");
	}

	$("#button").click(getAdvice);


	// This is your API URL: https://api.adviceslip.com/advice
	
});