// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add new task
    function addTask() {
        // Get and trim task text
        const taskText = taskInput.value.trim();
        
        // Check if input is empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create new list item
        const taskItem = document.createElement('li');
        // Set text content
        taskItem.textContent = taskText;
        
        // Create remove button
        const removeButton = document.createElement('button');
        // Set button text and class
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';
        
        // Add click handler to remove task
        removeButton.onclick = function() {
            taskList.removeChild(taskItem);
        };

        // Append button to list item
        taskItem.appendChild(removeButton);
        // Append list item to task list
        taskList.appendChild(taskItem);

        // Clear input field
        taskInput.value = '';
    }

    // Add click event to add button
    addButton.addEventListener('click', addTask);

    // Add keypress event to input field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});