const form = document.getElementById("toDo");
const inputBox = document.getElementById("inputBox");
const tasksList = document.getElementById("tasks");

const totalCount = document.getElementById("total");
const completedCount = document.getElementById("completed");

// Update task counters
function updateCounts() {
    const total = tasksList.children.length;
    const completed = document.querySelectorAll("#tasks li.completed").length;

    totalCount.textContent = total;
    completedCount.textContent = completed;
}

// Add task
form.addEventListener("submit", (event) => {
    event.preventDefault();

    let taskText = inputBox.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    // Mark as completed on click
    li.addEventListener("click", () => {
        li.classList.toggle("completed");
        updateCounts();
    });

    //Everything here is not my part but I had to do it 
    // to see if my code worked properly
    // Right-click to delete
    li.addEventListener("contextmenu", (event) => {
        event.preventDefault(); // stop default menu
        li.remove();
        updateCounts();
    });

    tasksList.appendChild(li);
    inputBox.value = "";

    updateCounts();
});
