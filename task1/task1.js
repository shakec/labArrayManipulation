const prompt = require("prompt-sync")()

// ARRAY MANIPULATION BASICS

// 1. Create an empty array called shoppingList.
// 2. Write a function called addItem that takes an item as a parameter and adds it to the shoppingList array.
// 3. Write a function called removeLastItem that removes the last item from the shoppingList array.
// 4. Write a function called displayList that logs all items in the shoppingList array to the console.

// 1. create empty array
let shoppingList = []
console.log(shoppingList)

// write function addItem, add it to shopping list
function addItem (item) {
    shoppingList.push(item)
    console.log(`${item} has been added!`)
}
// call function
addItem("notebook")
addItem("pencil")
addItem("pencil sharpener")
// check result
console.log(shoppingList)

// 2. write function removeLastItem
function removeLastItem () {
    let removedItem = shoppingList.pop()
    console.log(`Remove the last item, ${removedItem}, from the list, I don't need it anymore`)
}
// call function
removeLastItem()
// check result
console.log(shoppingList)


// 3. display all items in the shopping list to the console
function displayList () {
    // using forEach method with a function to loop through the array
    shoppingList.forEach(function (item) {
        // printing the items in list format
        console.log("- " + item)
    })
}
// call the function
displayList()