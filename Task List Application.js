let tasks = []; //Task List

function addTask() {
    const taskInput = document.getElementById('taskInput').value;
    if (taskInput) {
        tasks.push(taskInput); 
        document.getElementById('taskInput').value = ''; 
        displayTasks(); 
    } else {
        alert('Please enter a task.');
    }
}

function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks(); 
}

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; 

    tasks.forEach((task, index) => {
        const li = document.createElement('li'); 
        li.textContent = task; 

        const removeButton = document.createElement('button'); 
        removeButton.textContent = 'Remove'; 
        removeButton.onclick = () => removeTask(index); 

        li.appendChild(removeButton); 
        taskList.appendChild(li); 
    });
}

const toggleButton = document.getElementById('toggleButton'); //Dark Mode and Light Mode

function toggleMode() {
    const body = document.body;
    const header = document.querySelector('header');
    
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    toggleButton.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Switch to Light Mode';
    } else {
        toggleButton.textContent = 'Switch to Dark Mode';
    }
}