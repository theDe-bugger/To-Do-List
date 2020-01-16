var list = document.getElementById('list');

function add(){
    i = 0;
    var list = document.getElementById('list');
    var goal = document.createTextNode(document.getElementById('goal').value);
    var checkbox = document.createElement("input");
        checkbox.setAttribute("type","checkbox");
        checkbox.setAttribute("onclick","remove()");
        checkbox.setAttribute("name","check");
    var li = document.createElement('LI');
    li.id = "item" + String(i)
    li.appendChild(checkbox);
    li.appendChild(goal);
    list.appendChild(li);
}

function remove(){
    var list = document.getElementById("list");
    var checked = document.getElementsByName("check");
    for(i=0;i<checked.length;i++){
        if(checked[i].checked==true){
            setTimeout(() => {  list.removeChild(list.childNodes[i])}, 1000);
            
        }
    }
}