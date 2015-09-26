$(document).ready( function(){
    init();

    function init(){
        console.log()
        populatePanels(taskDetails)

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



});
function navigateToDetails(item){

    location.href= "../../kid/taskPage/taskPage.html" + "?"+ item.details.taskID;
}