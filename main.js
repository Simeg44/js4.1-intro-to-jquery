$(document).on('ready', function() {
  	$(".j-btn").on('click', 'button', function() {
  		var message = ("<span>You have clicked on the button. </span>")
  		$(this).closest(".container").append(message);
  	});

  	$(".console-btn").on('click', 'button', function() {
  		console.log("Console message");
  	});

  	$(".header-btn").on('click', 'button', function() {
  		var headMsg = ("<h1>Third Button</h1><p>Here is some more text. </p>")
  		$(this).closest(".container").append(headMsg);
  	});

  	$(".list-btn").on('click', 'button', function() {
  		var list = ("<ul><li>Cheese</li><li>Eggs</li><li>Milk</li></ul>");
  		$(this).closest(".container").append(list);
  	});
});