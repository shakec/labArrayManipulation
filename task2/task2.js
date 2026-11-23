const prompt = require("prompt-sync")()
// Filter and Search an Array

// 1. Modify the addItem function to only add the item if it is not already in the shoppingList array.
// 2. Write a function called filterItems that takes a search term as a parameter and returns all items in the shoppingList that contain that search term (case-insensitive).

let shoppingList = []
console.log(shoppingList)

// 1. update to check if item is already there
function addItem (item) {
    if (shoppingList.includes(item)) {
    console.log(`${item} is already in your list.`)
    } else {
        shoppingList.push(item)
        console.log(`${item} has been added!`)
    }
}
// call function
addItem("notebook")
addItem("pencil")
// addItem("pencil")
addItem("pencil sharpener")
// check result
console.log(shoppingList)

function filterItems(searchTerm) {
// return all items from search, case-sensitive
}
filterItems("pencil")