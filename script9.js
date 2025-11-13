document.getElementById("addTaskBtn").addEventListener("click", addTask);

function addTask() {
  const task = document.getElementById("taskInput").value.trim();
  const day = document.getElementById("daySelect").value;

  if (task === "" || day === "") {
    alert("Please enter a task and select a day.");
    return;
  }

  // Convert day to lowercase for matching ID
  const dayId = day.toLowerCase() + "Task";
  const taskCell = document.getElementById(dayId);

  if (taskCell) {
    taskCell.textContent = task;
    alert(`Task added for ${day}: "${task}"`);
  }

  // Clear input
  document.getElementById("taskInput").value = "";
  document.getElementById("daySelect").value = "";
}
