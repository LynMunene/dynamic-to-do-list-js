document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements exactly as specified
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Define addTask function exactly as specified
    function addTask() {
        // Get and trim input value exactly as specified
        const taskText = taskInput.value.trim();
        
        // Check for empty input exactly as specified
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create li element and set textContent exactly as specified
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        
        // Create remove button exactly as specified
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';
        
        // Assign onclick event exactly as specified
        removeButton.onclick = function() {
            taskList.removeChild(taskItem);
        };

        // Append elements in exact order specified
        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);

        // Clear input exactly as specified
        taskInput.value = '';
    }

    // Add event listeners exactly as specified
    addButton.addEventListener('click', addTask);
    
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});