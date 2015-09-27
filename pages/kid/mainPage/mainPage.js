var taskData;
var curDataSet;
$(document).ready( function(){
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
                populatePanels(response);
                taskData=response;
                curDataSet=response;
                populateCheckboxes(response);

            },
            error:function(response){
                console.log(response);
            },

        });

    }


});
function navigateToDetails(item){
    //console.log(item.details);
    location.href= "../../kid/taskPage/taskPage.html" + "?"+ item.details.pay+item.details.time;
}
function populatePanels(data){
    $("#tasksContainer").empty();
    var parent= document.getElementById("tasksContainer");
    for (var i = 0; i < data.length; i++){
        //var temp= document.getElementById("panelTemplate").cloneNode(true);
        var temp= $("#panelTemplate").clone(true);
        populateClone(temp, data[i]);
        parent.appendChild(temp[0]);

    }
}
function populateClone(node, data){
    node.find('#paySpan')[0].innerText=data.pay;
    node.find('#timeSpan')[0].innerText=data.time;
    node.find('#distSpan')[0].innerText=data.distance;
    node.find("#titleContainer")[0].innerText=data.title;
    node.find("#categoryContainer")[0].innerText=data.category;
    node[0].details=data;
    node[0].style.zIndex=4;
}
function populateCheckboxes(data){
    categories={};
    for (var i = 0; i < data.length; i++){
        categories[data[i].category]= data[i].category;
    }
    var parent= $("#checkboxContainer");
    var node= $("#checkboxTemplate");
    for (var property in categories) {
        if (categories.hasOwnProperty(property)) {
            var temp= node.clone(true);
            var a= document.createElement("SPAN");
            a.innerText= categories[property];
            temp.find("#checkboxLabel")[0].appendChild(a);
            parent[0].appendChild(temp[0]);
        }
    }
}

function updateFilters(){
    curDataSet=JSON.parse(JSON.stringify(taskData));
    var filter=$("#sel1 option:selected" ).text();
    filter= parseInt(filter);
    for (var i = 0; i < curDataSet.length; i++){
        if (parseFloat(curDataSet[i].distance) > filter){
            curDataSet.splice(i, 1);
            i--;
        }
    }
    var boxes= $("#categoryCheckbox");
    populatePanels(curDataSet);
}

