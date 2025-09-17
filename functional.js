const greet = (name, formatter) => formatter(name)
const shout = text => text.toUpperCase() + '!!!'
const lowerCase = text => text.toLowerCase()

// console.log(greet('Alice', shout))
// console.log(greet('BOB', lowerCase))

let y = 100 //global variable
let sum = 5
sum = 2
function getScore(x) {
  let y = 10 //local variable
  //global function
  let mid = 40
  let final = 30
  function doSomething() {
    console.log(`dosomething: ${y + sum + x + mid + final}`)
    //83
    //y (global),sum(global), y (local), x(local (parameter)) mid (local), final (local)
  }
  doSomething()
  return mid + final + x + y + sum
}
const score = getScore(1)
// console.log(score)
// console.log(x, mid, final) //cannot access
 
const z = 1
function makeAdder(x){
    console.log(x)
    console.log(y)
    console.log(z)
    return function dosomething(y){
        return x + y + z
    }
}
makeAdder(10)

// Practice-G2
function outerFunction(x){
    return function dosomething(y){
        return x + y
    }
}

const addFive = outerFunction(5)
console.log(addFive(3)) // 8

const addTen = outerFunction(10)
console.log(addTen(2)) // 12