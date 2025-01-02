const inputContainer = document.getElementById("inputContainer");
const listContainer = document.getElementById("list-container");

function addResolution(){
    
    if(inputContainer.value === ''){
        alert("enter a resolution to add to the list!!");
    }else{
    let li = document.createElement("li");
    li.innerHTML = inputContainer.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
}
    inputContainer.value = '';
    saveData();
}

listContainer.addEventListener("click",function(e){
   if(e.target.tagName === "LI"){
     e.target.classList.toggle("checked");
     saveData();
   }
   else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
   }
} 
    
)


function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();