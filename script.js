const inputBox = document.getElementById("input-box");


const listContainer = document.querySelector(".list-container");

function addTask(){
    if(inputBox.value === ''){
        console.log(inputBox.value)
        alert("You must write something!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        inputBox.value = "";
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span)
        addData();
    }
}


listContainer.addEventListener("click" , (e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked")
        addData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        addData();
    }
    
},false)


function addData(){
    localStorage.setItem("data" , listContainer.innerHTML)

}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();