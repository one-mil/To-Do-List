//variable assignments
const form = document.getElementById("toDo")
const inputBox = document.getElementById("inputBox")
const tasks = document.getElementById("tasks")
const total = document.getElementById("total")
const completed = document.getElementById("completed")
const message = document.getElementById("message")

form.addEventListener("submit", (event)=>{
    event.preventDefault();

    const userInput = inputBox.value.trim() 

    if(userInput===""){message.textContent = "Enter a task!";
        message.style.color = "red";
        return;  
    }
      const li = document.createElement("li")
const checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.classList.add("task-checkbox");

const span = document.createElement("span");
span.textContent = userInput;

})