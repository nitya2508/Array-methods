let numbers = [1,2,3,4,5,6,7]

let deleted = numbers.splice(2)
let deleted1 = numbers.splice(2,3)
let deleted2 = numbers.splice(2,4,10,20)
let deleted3 = numbers.splice(2,0,50,70)

console.log(numbers)

console.log(deleted)
console.log(deleted1)
console.log(deleted2)
console.log(deleted3)