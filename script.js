const listcontainer = document.querySelector(".listcontainer");
let input = document.querySelector("#input");
function addtask(){
    if(input.value === ""){
        alert("you must right something")
    }
    else{
      let li = document.createElement("li");
      li.innerHTML = input.value;
      listcontainer.appendChild(li);
      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      li.appendChild(span)
    }
  input.value = "";
  }

 listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
  })