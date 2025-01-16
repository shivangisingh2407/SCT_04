document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('task-list');
        const li = document.createElement('li');
        
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <span class="task-time"></span>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
            <button class="complete-btn">Complete</button>
        `;
        
        taskList.appendChild(li);
        taskInput.value = '';
        
        // Handle the task completion toggle
        li.querySelector('.complete-btn').addEventListener('click', () => toggleComplete(li));
        
        // Handle the task deletion
        li.querySelector('.delete-btn').addEventListener('click', () => deleteTask(li));

        // Handle task editing
        li.querySelector('.edit-btn').addEventListener('click', () => editTask(li));
        
        // Handle setting a date & time for the task
        const timeInput = prompt("Enter a due date & time (e.g., 2024-12-30 14:30):");
        if (timeInput) {
            li.querySelector('.task-time').innerText = `Due: ${timeInput}`;
        }
    }
}

function toggleComplete(taskElement) {
    taskElement.classList.toggle('completed');
}

function deleteTask(taskElement) {
    taskElement.remove();
}

function editTask(taskElement) {
    const taskText = taskElement.querySelector('.task-text');
    const newText = prompt("Edit task:", taskText.textContent);
    if (newText !== null) {
        taskText.textContent = newText;
    }
}
