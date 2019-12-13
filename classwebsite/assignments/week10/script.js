$(document).ready(function(){

    var colors = [
    "red",
    "orange",
    "yellow",
    "red",
    "orange",
    "yellow",
    "red",
    "orange",
    "yellow",
    "red",
    "orange",
    "yellow",
    "red",
    "orange",
    "yellow",
    "red",
    "orange",
    "yellow",
    "red",
    "orange",
    "yellow",
    "red",
    "orange",
    "yellow",
    "red",
    "orange",
    "yellow",
    "red",
    "orange",
    "yellow",
    "red",
    "orange",
    "yellow",
    "red",
    "orange",
    "yellow",
    ];

    

    var changeColor = function(index, color) {
      setTimeout(function() { 
      $("body").css({
        background: color
      });
       }, 1000*index);
    }

    $("body").mouseover(function() {
      $.each(colors,changeColor);
    });

})
