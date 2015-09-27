$(document).ready( function(){
    init();

    function init() {

        $(".headerTree, .headerText").hover(function () {
            $(".headerTree.light")[0].style.display = "none";
            $(".headerText.red")[0].style.display = "block";
            $(".headerTree.red")[0].style.display = "block";
            $(".headerText.light")[0].style.display = "none";
        }, function () {
            $(".headerTree.light")[0].style.display = "block";
            $(".headerText.red")[0].style.display = "none";
            $(".headerTree.red")[0].style.display = "none";
            $(".headerText.light")[0].style.display = "block";
        });
    }


});

function search(){
   // var inputs= validateLocation();// validate inputs
    console.log("posting");
    var data= {
        title: $("#title")[0].value,
        description: $("#description")[0].value,
        pay: $("#pay")[0].value,
        time: $("#time")[0].value,
        category: $("#category")[0].value,
    };
    console.log(data);
    $.ajax({
        type: "POST",
        url: "http://52.11.205.176:8080/api/task",
        data: data,
        success: function(response) {
            console.log(response);
        },
        error:function(response){
            console.log(response);
        },

    });
    //location.href= "../../kid/mainPage/mainPage.html" + "?";//+ inputs.address + '&' + inputs.zip;

}
function validateLocation(){
    return {
        address: $("#address")[0].value,
        zip: $("#zip")[0].value
    }
}
