// get list by ID
const listId = document.getElementById("list")
// get all <li> in <ul>
const allLists = listId.children
// console.log content in <li>
Array.from(allLists).forEach(list => console.log(list.textContent))
// create new <li>
const newList = document.createElement('li')
// add content to newList
newList.textContent = "AI"
// put newList to listId
listId.append(newList)
console.log("----------------------------------------")
Array.from(allLists).forEach(list => console.log(list.textContent))
