const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function addTask(){
    if(inputBox.value === ''){
        alert("You Must Write Something")
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
// making sure you add task and it will be added to the list 
    }
    inputBox.value="";
}

// making sure it is going to work effectively and it will become checked 
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
    } 
    else if(e.target.tagName == "SPAN") {
        e.target.parentElement.remove()
    }
}, false);