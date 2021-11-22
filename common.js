$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("תודה על היישום, אנו ניצור איתך קשר בקרוב ");
			$("#form").trigger("reset");
		});
		return false;
	});
	
});