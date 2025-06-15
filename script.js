
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Create the addTask Function
    function addTask() {
        // Retrieve and trim the task input
        const taskText = taskInput.value.trim();
        
        // Check if input is empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Task Creation
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        
        // Create Remove Button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';
        
        // Assign onclick event for removal
        removeButton.onclick = function() {
            taskList.removeChild(taskItem);
        };

        // Append elements
        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);

        // Clear input field
        taskInput.value = '';
    }

    // Attach Event Listeners
    addButton.addEventListener('click', addTask);
    
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});