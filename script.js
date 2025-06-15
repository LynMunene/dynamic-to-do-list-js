document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage when page loads
    loadTasks();

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => {
            createTaskElement(taskText, false);
        });
    }

    // Function to create task element (separated from addTask for reusability)
    function createTaskElement(taskText, saveToStorage = true) {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');
        
        removeButton.onclick = function() {
            // Remove from DOM
            taskList.removeChild(taskItem);
            // Remove from Local Storage
            updateLocalStorage(taskText, true);
        };

        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);

        // Save to Local Storage if needed
        if (saveToStorage) {
            updateLocalStorage(taskText);
        }
    }

    // Function to update Local Storage
    function updateLocalStorage(taskText, remove = false) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        
        if (remove) {
            const index = storedTasks.indexOf(taskText);
            if (index > -1) {
                storedTasks.splice(index, 1);
            }
        } else {
            storedTasks.push(taskText);
        }
        
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Main addTask function
    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        createTaskElement(taskText);
        taskInput.value = '';
    }

    // Event listeners
    addButton.addEventListener('click', addTask);
    
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});