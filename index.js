let tasks = []

const addButton = document.getElementById("add_btn");
const input = document.getElementById("task_field");
const taskDiv = document.querySelector(".Tasks")


addButton.onclick = function () {
    const taskText = input.value.trim();

    tasks.push(taskText);
    const li = document.createElement('li');
    li.textContent = taskText;

    taskDiv.appendChild(li);

}
