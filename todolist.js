var list = document.getElementById('list');
var i = 0;
function add(){
    var list = document.getElementById('list');
    var goal = document.createTextNode(document.getElementById('goal').value);
    var checkbox = document.createElement("input");
        checkbox.setAttribute("type","checkbox");
        checkbox.setAttribute("name","check");
        checkbox.setAttribute("onclick","remove()");
    var li = document.createElement('LI');
    li.id = "item" + String(i)
    li.appendChild(checkbox);
    li.appendChild(goal);
    list.appendChild(li);
    i++;
}

function remove(e){
    var list = document.getElementById("list");
    var checked = document.getElementsByName("check");
    for(i=0;i<checked.length;i++){
        if(checked[i].checked==true){
            list.removeChild(list.childNodes[i]);
        }
    }
}