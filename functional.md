# First-Class and Higher-Order Functions

# declarative vs imperative
 - https://dev.to/siddharthshyniben/explained-imperative-vs-declarative-programming-577g
 - https://dev.to/bipon68/imperative-vs-declarative-javascript-2ij7

# immutability 
ไม่ควรแก้ไขค่า เช่น filter map ควร return เป็น structure ใหม่ ไม่ควรไปยุ่งกับ OG Data structure

parallel programming

# pure Function 
ต้องใช้แค่ local variable ไม่ยุ่งตัวแปรนอก function

# Function types
## inner (nested) Function
``` javascript
function addSquares(a, b) {
function square(x) {
return x * x
}
return square(a) + square(b)
}

// Arrow function
const addSquares2 = (a, b) => {
const square = (x) => x * x
return square(a) + square(b)
}
```

# Function scope
ตัวแปรใน Function ไม่สามารถูก access ได้จากภายนอก
มองตัวที่ใกล้ที่สุดก่อนถ้าไม่เจอจะไปหาตัวไกล ถ้าไม่เจออีกจะ error
function ที่ซ้อนใน function สามารถ access ตัวแปรที่อยู่ใน parent variable

``` javascript
let y = 100 //global variable
let sum = 5
sum = 2
function getScore(x) {
  //   let y = 10 //local variable
  //global function
  let mid = 40
  let final = 30
  function doSomething() {
    // console.log(`dosomething: ${y + sum + x + mid + final}`)
    return `dosomething: ${y + sum + x + mid + final}`
    //83
    //y (global),sum(global), y (local), x(local (parameter)) mid (local), final (local)
  }
  doSomething()
  return mid + final + x + y + sum
  //   return doSomething()
}
const score = getScore(1)
console.log(score)
// console.log(doSomething()) //cannot access
// console.log(x, mid, final) //cannot access
```

# Closures
ชั้นในสุดสามารถเข้าถึงตัวแปรของ outer ได้ แต่ outer เข้าถึงชั้นในไม่ได้

```javascript
const z = 1
function makeAdder(x){
    console.log(x)
    console.log(y)
    console.log(z)
    return function (y){
        return x + y + z
    }
}
makeAdder(10)
```