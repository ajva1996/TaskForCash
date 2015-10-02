$(document).ready(function() {
	console.log(5);
	$('.btn').bind("click", function() {
		nav();
		console.log(2);
	});

	function nav() {
		location.href = "../mainPage/mainPage.html";
	}
});