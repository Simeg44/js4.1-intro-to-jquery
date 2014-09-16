$(document).on('ready', function() {
  $("button").on("click", function() {
  	$(".container").append("<div class='popUp'><div><button>Close</button></div></div>")
 
 	$(".popUp").on("click", "button", function() {
  		$(".popUp").remove();
  	});

  });

});