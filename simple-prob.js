// 1. เขียนฟังก์ชัน doubleNumbers(arr) ที่รับ array ของตัวเลข และ return array ของตัวเลขที่คูณสองทุกตัว

function doubleNumbers(arr){
    return arr.map(x => x * 2)
}

const result = doubleNumbers([1, 2, 3]) // [2, 4, 6]
console.log(result)

// เขียนฟังก์ชัน onlyEven(arr) ที่รับ array ของตัวเลข และ return array ที่มีเฉพาะเลขคู่

function onlyEven(arr){
    return arr.filter(x => x % 2 === 0)
}

const even = onlyEven([1, 2, 3, 4]) // [2, 4]
console.log(even)

// เขียนฟังก์ชัน sumAll(arr) ที่หาผลรวมของตัวเลขทั้งหมดใน array

function sumAll(arr){
    return arr.reduce((x,y) => x + y, 0)
}

const sum = sumAll([1, 2, 3, 4]) // 10
console.log(sum)

// --------------------------------------------------

// เขียนฟังก์ชัน getNames(users) ที่รับ array ของ object แล้ว return เฉพาะชื่อ

function getNames(users){
    return users.map(user => user.name)
}

const users = [
  { name: 'Alice', age: 21 },
  { name: 'Bob', age: 25 },
  { name: 'Jean', age: 17},
  { name: 'Jame', age: 18}
]
console.log(getNames(users)) // [ 'Alice', 'Bob', 'Jean', 'Jame' ]


// เขียนฟังก์ชัน adults(users) ที่ return คนที่อายุมากกว่า 18 ปีขึ้นไป

function adults(users){
    return users.filter(user => user.age >= 18)
}

console.log(adults(users)) 
/*
[
  { name: 'Alice', age: 21 },
  { name: 'Bob', age: 25 },
  { name: 'Jame', age: 18 }
]
  */

// เขียนฟังก์ชัน totalAge(users) ที่หาผลรวมของอายุทั้งหมด

function totalAge(users){
    return users.reduce((x, user) => user.age + x, 0)
}

console.log(totalAge(users)) // 81