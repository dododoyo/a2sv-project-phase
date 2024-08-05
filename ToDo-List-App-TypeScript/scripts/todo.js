// scripts/todo.ts
var addTask = function(text) {
  const newTask = { text, id: nextId++ };
  todoList.push(newTask);
  displayTask(newTask);
};
var displayTask = function(task) {
  const newTaskElement = document.createElement("li");
  newTaskElement.className = "bg-gray-200 p-2 rounded mb-2 flex justify-between items-center hover:bg-gray-300";
  newTaskElement.dataset.id = task.id.toString();
  const taskText = document.createElement("span");
  taskText.textContent = task.text;
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.className = "bg-blue-500 text-white p-1 rounded hover:bg-blue-600";
  editButton.addEventListener("click", () => {
    const newText = prompt("Edit your task:", task.text);
    if (newText !== null && newText.trim() !== "") {
      task.text = newText.trim();
      taskText.textContent = task.text;
    }
  });
  const removeButton = document.createElement("button");
  removeButton.textContent = "X";
  removeButton.className = "bg-red-500 text-white p-1 rounded hover:bg-red-600";
  removeButton.addEventListener("click", () => {
    removeTask(task.id);
  });
  newTaskElement.appendChild(taskText);
  newTaskElement.appendChild(editButton);
  newTaskElement.appendChild(removeButton);
  taskList.appendChild(newTaskElement);
};
var removeTask = function(id) {
  todoList = todoList.filter((task) => task.id !== id);
  const taskElement = taskList.querySelector(`[data-id='${id}']`);
  if (taskElement) {
    taskList.removeChild(taskElement);
  }
};
var todoList = [];
var nextId = 1;
var taskList = document.getElementById("task-list");
var newTaskInput = document.getElementById("new-task");
var addButton = document.getElementById("add-task");
addButton.addEventListener("click", () => {
  const taskText = newTaskInput.value.trim();
  if (taskText !== "") {
    addTask(taskText);
    newTaskInput.value = "";
  }
});
