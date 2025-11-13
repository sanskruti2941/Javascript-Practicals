// Access elements using getElementById and querySelector
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.querySelector("#addTaskBtn");
const taskList = document.getElementById("taskList");

// Add event listener
addTaskBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create new list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Create buttons for edit and delete
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("task-buttons");

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit");
  editBtn.onclick = () => editTask(li);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => removeTask(li);

  // Append buttons
  buttonContainer.appendChild(editBtn);
  buttonContainer.appendChild(deleteBtn);

  // Append to list item
  li.appendChild(buttonContainer);

  // Add to task list
  taskList.appendChild(li);

  // Clear input box
  taskInput.value = "";
}

function editTask(li) {
  const newTask = prompt("Edit your task:", li.firstChild.textContent);
  if (newTask !== null && newTask.trim() !== "") {
    li.firstChild.textContent = newTask.trim();
  }
}

function removeTask(li) {
  li.remove();
}
