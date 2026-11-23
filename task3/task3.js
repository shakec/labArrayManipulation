const prompt = require("prompt-sync")()

// Grab DOM Elements
// Console.log to make sure your grabbing the right element.
const input = document.getElementById("todoInput");
// console.log(input);
const button = document.getElementById("addButton");
// console.log(button);
const todoList = document.getElementById("todoList");
// console.log(todoList);

// One click function that:
// Grabs Input
// Appends to the DOM
// Clear the Input

// When creating an event listener - we have 2 arguments:
// One: The action - click, hover, button press, etc.
// Two: Function - the behavior, what happens after the click.
button.addEventListener("click", function(){
    // Store the input
    const task = input.value

    // /////////////////////////////
    // CONDITIONAL FOR ALERT
    // /////////////////////////////

    const existingTasks = todoList.querySelectorAll("li")
    // console.log("list of tasks", existingTasks)

    for (let i = 0; i < existingTasks.length; i++) {

        if (existingTasks[i].firstChild.textContent.trim() === task.trim()) {
            alert("This Already Exists in Your Tasks!");
            return;
        }
    }


    ///////////////////////////////

    // Create a new DOM element
    const newTask = document.createElement("li")

    // Add input text in the newly created li
    newTask.textContent = task

    // Add the Delete button
    const deleteButton = document.createElement("button")

    // Add Delete button text
    deleteButton.textContent = "Delete"

    // Add Delete functionality to button
    deleteButton.addEventListener("click", function(){
        newTask.remove();
    })

    // Add the Delete button to the li
    newTask.appendChild(deleteButton)

    // Add the newly created li to the existing ul
    todoList.appendChild(newTask)

    // Reset the input
    input.value = ""

});