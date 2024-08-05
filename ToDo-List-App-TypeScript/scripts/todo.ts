interface TodoItem {
  text: string;
  id: number;
}

let todoList: TodoItem[] = [];
let nextId = 1;

const taskList = document.getElementById("task-list") as HTMLUListElement;
const newTaskInput = document.getElementById("new-task") as HTMLInputElement;
const addButton = document.getElementById("add-task") as HTMLButtonElement;

addButton.addEventListener("click", () => {
  const taskText = newTaskInput.value.trim();
  if (taskText !== "") {
    addTask(taskText);
    newTaskInput.value = "";
  }
});

function addTask(text: string) {
  const newTask: TodoItem = { text, id: nextId++ };
  todoList.push(newTask);
  displayTask(newTask);
}

function displayTask(task: TodoItem) {
  const newTaskElement = document.createElement("li");
  newTaskElement.className =
    "bg-gray-200 p-2 rounded mb-2 flex justify-between items-center hover:bg-gray-300";
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
}

function removeTask(id: number) {
  todoList = todoList.filter((task) => task.id !== id);
  const taskElement = taskList.querySelector(`[data-id='${id}']`);
  if (taskElement) {
    taskList.removeChild(taskElement);
  }
}
