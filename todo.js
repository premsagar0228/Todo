var fileid=0;
function add_Event()
{
    fileid++;
    var newId= document.getElementById("list");
   // newId.classList.add(newId);
    var element=document.createElement("li");
    element.setAttribute('id','file'+fileid);
    newId.appendChild(element);
    
    var para=document.createElement("p");
    element.appendChild(para);
    
    var element2=document.createElement("input");
    element2.type="text";
    element2.innerText=element2.value;
    element.appendChild(element2);  
    

    var element3=document.createElement("button"); 
    //element3.setAttribute('id','file'+fileid);
    element3.innerText="Remove";
   
 
    element.appendChild(element3);
    
    
    
    var element4=document.createElement("button");   
      
    element4.innerText="EDIT";

 
    element.appendChild(element4);
   
    
    

    element3.addEventListener("click",deleteInput);

}


function deleteInput() {
   console.log(parentNode);
  / console.log(this.parentNode.parentNode.parentNode);
    var child=this.parentNode;
    var parent=child.parentNode;
     parent.removeChild(child);
}