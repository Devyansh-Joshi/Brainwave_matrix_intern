const input = document.getElementById("task-input");
const dateInput = document.getElementById("task-date");
const timeInput = document.getElementById("task-time");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
const filterDate = document.getElementById("filter-date");
const searchInput = document.getElementById("search-input");
const exportBtn = document.getElementById("export-btn");
const importFile = document.getElementById("import-file");

window.onload = () => {
  loadTasks();
};

addBtn.addEventListener("click", () => {
  if (input.value.trim()) {
    addTask(input.value, dateInput.value, timeInput.value);
    input.value = "";
    dateInput.value = "";
    timeInput.value = "";
  }
});

searchInput.addEventListener("input", filterTasks);
filterDate.addEventListener("change", filterTasks);

exportBtn.addEventListener("click", () => {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  const blob = new Blob([JSON.stringify(tasks, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "tasks.json";
  a.click();
  URL.revokeObjectURL(url);
});

importFile.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const importedTasks = JSON.parse(event.target.result);
      localStorage.setItem("tasks", JSON.stringify(importedTasks));
      loadTasks();
    } catch {
      alert("Invalid JSON file.");
    }
  };
  reader.readAsText(file);
});

function addTask(text, date = "", time = "", completed = false) {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  tasks.push({ text, date, time, completed });
  saveTasks(tasks);
  loadTasks();
}

function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  tasks.sort(
    (a, b) => new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`)
  );
  displayTasks(tasks);
}

function displayTasks(tasks) {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.classList.add("task-text");
    taskSpan.textContent = task.text;
    if (task.completed) taskSpan.classList.add("completed");

    taskSpan.addEventListener("click", () => {
      task.completed = !task.completed;
      saveTasks(updateTask(index, task));
      loadTasks();
    });

    const datetimeSpan = document.createElement("span");
    datetimeSpan.className = "datetime";
    if (task.date || task.time) {
      datetimeSpan.textContent = `(${task.date} ${task.time})`;
    }

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = () => {
      const newText = prompt("Edit task:", task.text);
      if (newText !== null) {
        task.text = newText;
        saveTasks(updateTask(index, task));
        loadTasks();
      }
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => {
      tasks.splice(index, 1);
      saveTasks(tasks);
      loadTasks();
    };

    li.appendChild(taskSpan);
    li.appendChild(datetimeSpan);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

function updateTask(index, newTask) {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  tasks[index] = newTask;
  return tasks;
}

function filterTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  const searchTerm = searchInput.value.toLowerCase();
  const selectedDate = filterDate.value;
  const filtered = tasks.filter((task) => {
    const matchesDate = !selectedDate || task.date === selectedDate;
    const matchesSearch =
      !searchTerm || task.text.toLowerCase().includes(searchTerm);
    return matchesDate && matchesSearch;
  });
  displayTasks(filtered);
}
