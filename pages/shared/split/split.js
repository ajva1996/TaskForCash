$(document).ready( function(){
   init();

    function init(){
        console.log(2);
        $("#top").bind("click", function(){
            gotoLocation();
        });
        $("#tree").bind("click", function(){
            gotoLocation();
        });
        $("#bottom").bind("click", function() {
            createPosting();
        });
    }

    function createPosting(){
        // check login status
        console.log(1);
        location.href= "../../adult/addTask/addTask.html";
    }
    function gotoLocation(){
        location.href= "../../kid/location/location.html";
    }
});