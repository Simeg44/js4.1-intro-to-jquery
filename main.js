$(document).on('ready', function() {
  	$(".j-btn").on('click', 'button', function() {
  		var message = ("<span>You have clicked on the button. </span>")
  		$(this).closest(".container").append(message);
  	});

  	$(".console-btn").on('click', 'button', function() {
  		console.log("Console message");
  	});
});