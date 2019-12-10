$(document).ready(function(){


	var singleman = $("#firstman");
	var everyone = $("#men");


	$("#window").mouseover(function(){
   		$("#window").css("background-color", "yellow");
 	});

 	$("#window").mouseout(function(){
    	$("#window").css("background-color", "lightgray");
    });

  	$("#sky").click(function(){
  		console.log(singleman);
  		var clone = $(singleman).clone();
    	$(everyone).append(clone);
	});

 	$("button").click(function(){
    	$(everyone).empty();
  	});

  $("#dog").click(function(){
    $("#dog img").toggleClass("bigger");
  });



})
