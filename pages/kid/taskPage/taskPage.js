$(document).ready(function() {
	var name = adult.personalInfo.name;
	var pic = adult.picture;
	var time = task.details.time;
	var pay = task.details.pay;
	var title = task.details.title;
	var description = task.body.description;
	var pictures = task.body.pics;
	var ratings = adult.feedback;

	stars(ratings);

	$("#link").html("<a href=../../shared/profile/profile.html>" + name + "'s profile</a>");
	$("#pic").html("<img src='../../../resources/kid.jpg' class='img-responsive img-rounded'/>");
	$("#title").html("<h1>" + title + "</h1>");
	$("#pay").html("<h3>" + pay + "</h3>");
	$("#time").html("<h3>" + time + "</h3>");
});

//Generates a string of stars for all the feedback categories
var stars = function(ratings) {
	//Ratings is an array of feedbacks--average them
	var feedback = avgFeedbacks(ratings);
	var cats = ["clarity", "respect", "followthrough"];
	for (var cat = 0; cat < cats.length; cat++) {
		$("#" + cats[cat]).html("<span class='pull-right'>" + feedback[cat] + "</span>");
		// for (var i = 0; i < 5; i++) {
		// 	var stars = "";
		// 	if (stars.length <= feedback[i] - 1) {
		// 		stars += "\260";
		// 	} else {
		// 		stars += "\255";
		// 	}
		// }
		// //Write html to incorporate
		// console.log(stars);
		// $("#" + cats[cat]).html("<span class='pull-right'>" + stars + "</span>");
	}
}

var avgFeedbacks = function(ratings) {
		var clarity = 0;
		var respect = 0;
		var followthrough = 0;
		for (var i = 0; i < ratings.length; i++) {
			clarity += ratings[i].clarity;
			respect += ratings[i].respect;
			followthrough += ratings[i].followthrough;
		}
		return [clarity / ratings.length, respect / ratings.length, followthrough / ratings.length];
}


var loadApplicationConfirm = function() {
	location.href = "../applicationConfirm/applicationConfirm.html";
}











