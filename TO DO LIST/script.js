let tasks = [];

function addTask() {
  const title = document.getElementById("task-title").value;
  const description = document.getElementById("task-description").value;
  const date = document.getElementById("task-date").value;

  if (title && description && date) {
    const task = { title, description, date };
    tasks.push(task);
    displayTasks();
    clearInputFields();
  } else {
    alert("Please fill out all fields!");
  }
}

function displayTasks() {
  const tasksList = document.getElementById("tasks");
  tasksList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.classList.add("task");
    li.innerHTML = `
      <strong>${task.title}</strong>: ${task.description} (Saved on ${task.date})
      <span class="delete-btn" onclick="deleteTask(${index})">Delete</span>
    `;
    tasksList.appendChild(li);
  });
}

function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

function clearInputFields() {
  document.getElementById("task-title").value = "";
  document.getElementById("task-description").value = "";
  document.getElementById("task-date").value = "";
}
