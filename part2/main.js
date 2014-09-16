$(document).on('ready', function() {
  $("p").hover(function() {	
  	$(this).css("color", "pink");
  }, function () {
  	$(this).css("color", "black");
  });

  $(".h-class").append("!");

  $("a").on("click", function() {
  	var answer = confirm("Did you want to leave this page?");

  	if (!answer) {
  		$(this).removeAttr("href");
  	}
  	
  })
});