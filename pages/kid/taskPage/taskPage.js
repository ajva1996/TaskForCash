$(document).ready(function() {
	init();

	function init(){

		$(".headerTree, .headerText").hover(function(){
			$(".headerTree.light")[0].style.display="none";
			$(".headerText.red")[0].style.display="block";
			$(".headerTree.red")[0].style.display="block";
			$(".headerText.light")[0].style.display="none";
		}, function(){
			$(".headerTree.light")[0].style.display="block";
			$(".headerText.red")[0].style.display="none";
			$(".headerTree.red")[0].style.display="none";
			$(".headerText.light")[0].style.display="block";
		});
		$.ajax({
			type: "GET",
			url: "http://52.11.205.176:8080/api/task",
			data: {hi:"hello from client"},
			success: function(response) {
				console.log(response)
				//console.log(response);

				selectItem(response);

			},
			error:function(response){
				console.log(response);
			},

		});

	}
	function populate(data){
		console.log(data);
		$("#bodyContainer")[0].innerText=data.description;
		$("#distSpan")[0].innerText=data.distance;
		$("#paySpan")[0].innerText=data.pay;
		$("#timeSpan")[0].innerText=data.time;
		$("#title")[0].innerText= data.title;
	}

	function selectItem(data){
		var qs= window.location.href;
		qs=qs.substring(qs.indexOf("?")+1);
		console.log("searching");
		for (var i = 0; i < data.length; i++){
			if ((data[i].pay + data[i].time)==(qs)){
				populate(data[i]);
				return;
			}
		}
		return populate(data[0]);
	}
});

var applyToJob = function() {
	location.href = "../applicationConfirm/applicationConfirm.html";
}







