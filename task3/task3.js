// create an empty array
let shoppingList = []

// grab DOM elements
const input = document.getElementById("todoInput")
const addButton = document.getElementById("addButton")
const deleteButton = document.getElementById("deleteButton")
const todoList = document.getElementById("todoList")

// add event listeners
addButton.addEventListener('click', () => {
    const task = input.value
    if (task.trim() === "") return
})

// create function to add items to my list
function addItem (item) {
    if (item.trim() === "") {
        alert("Not a valid input")
    } else {
        return addItem
    }
    // console.log()

    // check if item already exists
    const alreadyThere = shoppingList.includes(item.trim())

    // write the conditions for it's existance
    if (alreadyThere) {
        alert("This item is already in your list.")
        return false
    }

    shoppingList.push(item)
}

// display list
function displayList (items = shoppingList) {
    todoList.innerHTML = ""

    items.forEach(item, index) => {
        const li = document.createElement("li")
        li.textContent = item
    }
    // add to the list
    todoList.appendChild(li)
}


