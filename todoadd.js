var list_id=1;
function add_Event()
{
    var parentId=document.getElementById('list');
   var child ='<input type="text"  class="input-text">'+
    '<button type="button" id="ebtn" value="EDIT" onclick="editInput()">EDIT</button >'+
    '<button type="button" id="dbtn" value="DELETE" onclick="deleteInput()">DELETE</button>';

    l1=document.createElement('li');
    p1=document.createElement('p');   
    p1.innerHTML=child;
    l1.appendChild(p1);
    parentId.appendChild(l1);  
    l1.setAttribute('id','li');
    list_id++;

   

}



function deleteInput() {
  var x=document.getElementById('dbtn')
  alert(this.parentNode);
  
   alert(x);
 //  alert(element);

 // alert(this);
  //console.log();
 //      var child=this.parentNode;
   //   var parent=child.parentNode;
  //    parent.removeChild(child);
 }