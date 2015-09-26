$(document).ready( function(){
    init();

    function init(){
        populatePanels(taskDetails);
        populateCheckboxes(taskDetails);
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

    }
    function populatePanels(data){
        var parent= document.getElementById("tasksContainer");
        for (var i = 0; i < 15; i++){
            //var temp= document.getElementById("panelTemplate").cloneNode(true);
            var temp= $("#panelTemplate").clone(true);
            populateClone(temp, data[i]);
            parent.appendChild(temp[0]);
            data[i+1]=data[i];
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



});
function navigateToDetails(item){

    location.href= "../../kid/taskPage/taskPage.html" + "?"+ item.details.taskID;
}