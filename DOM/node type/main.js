// const html1 = document.documentElement
// const firstNode = document.firstChild
// const firstElementNode = document.firstElementChild
// const lastNode = document.lastChild
// const lastElementNode = document.lastElementChild
// console.log(html1)
// console.log(firstNode)
// console.log(firstElementNode)
// console.log(lastNode)
// console.log(lastElementNode)


// if (document.body.nodeType === Node.ELEMENT_NODE){
//     alert("Body is an element");
// }
// if (someNode.nodeType === Node.ELEMENT_NODE){
// alert("Node is an element.");
// }

// const divElement = document.getElementById('exampleElement')
// const divChild = divElement.childNodes
// console.log(`length: ${divElement.childNodes.length}`)
// divChild.forEach((child) => {
// console.log(child.nodeName)
// console.log(child.nodeType)
// console.log(child.nodeValue)
// })

// const divChildren = divElement.children // return HTMLCollection data type
// console.log(`length: ${divElement.children.length}`)
// Array.from(divChildren).forEach((child) =>{
//     console.log(child.nodeName)
//     console.log(child.nodeType)
//     console.log(child.nodeValue)
// })

// let p = document.createElement("p")
// const subject = document.getElementById("subject")
// subject.appendChild(p)

// create element
// const subject = document.getElementById('subject')
// const newp = document.createElement('p')
// // const idAttr = document.createAttribute('id')
// // idAttr.value('int141')
// // newp.setAttributeNode(idAttr)
// newp.setAttribute('id', 'int141')
// newp.setAttribute('style', 'color:red')
// newp.setAttribute('name', 'core')


// // create text
// // const pText = document.createTextNode('Test text')
// // newp.appendChild(pText)
// newp.textContent = "text content"
// // add element with text to parent
// subject.appendChild(newp)

// // console.log(newp.getAttribute('id')) // int141
// // console.log(newp.attributes[0]) // id="int141"
// // console.log(newp.attributes[0].ownerElement) // <p id="int141">

// const pAttributes = newp.attributes
// for(let i = 0; i < pAttributes.length; i++){
//     const name = pAttributes[i].name
//     const value = pAttributes[i].value
//     if (pAttributes[i].name === 'id') console.log(name, value)
// }

const ulElement = document.getElementById('drink')
const allDrinks = ulElement.children
Array.from(allDrinks).forEach((drink) => console.log(drink))

let teaDrink = allDrinks[1]
console.log(teaDrink.textContent)

console.log(teaDrink.previousElementSibling)
console.log(teaDrink.nextElementSibling)
console.log(teaDrink.parentElement)