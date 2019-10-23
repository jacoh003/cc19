$(document).ready(function(){

	var words = "I love you Mika!!!  "; 
	var text = "click on this box...      "
	var box = $("#box");
	var addTextToBox = function() {
		box.append(words);
		//var textBox =$("<span></span>");
		//textBox.addClass("text-box");
		//textBox.append(words);
		//box.append(textBox);
	}



	var addwordToBox = function() {
		box.append(text);
	}

	addwordToBox();
	//addTextToBox();
	box.click(addTextToBox);













})
