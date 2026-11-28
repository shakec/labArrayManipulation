// create an empty array
let shoppingList = []

// grab DOM elements
const todoInput = document.getElementById("todoInput")
const addButton = document.getElementById("addButton")
// const deleteButton = document.getElementById("deleteButton")
const todoList = document.getElementById("todoList")

// add event listeners
addButton.addEventListener('click', () => {
    const task = todoInput.value
    if (task.trim() === "") return

    // when pressed add the item to the DOM
    const added = addItem(task)
    if (added) {
        displayList()
        todoInput.value = ""
        todoInput.focus()
    }
    // console.log()
})

// create function to add items to my list
function addItem (item) {
    if (item.trim() === "") {
        alert("Not a valid input")
        return false
    }
    // console.log()

    // const alreadyThere = shoppingList.includes(item.trim()) to check if the item already exists
    if (shoppingList.includes(item.trim())) {
        alert('This item is already in your list')
    }

    // add item(s) to the array
    shoppingList.push(item.trim())
    return true
}

// a function that takes a search term as a parameter
function filterItems (searchTerm) {
    return shoppingList.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase())
    )
}


// display list
function displayList () {
    todoList.innerHTML = ""

    shoppingList.forEach((item, index) => {
        const li = document.createElement('li')
        li.textContent = item

        // delete button logic — add to every list item
        const delBtn = document.createElement('button')
        delBtn.textContent = 'Delete'

        // add click event to the button
        delBtn.addEventListener('click', () => {
            shoppingList.splice(index, 1) // removes single item from the list
            displayList() // refresh the list
        })
        li.appendChild(delBtn) // add button to every list item
        todoList.appendChild(li) // add item to the list
    })
}


