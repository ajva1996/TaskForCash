$(document).ready(function() {
	$('.btn').bind("click", function() {
		nav();
	});

	function nav() {
		location.href = "../../shared/split/split.html";
	}
});