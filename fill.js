let numbers = [1,2,3,4,5,6,7]

numbers.fill(0,1,4)

console.log(numbers)

function fillInNum(n){
    return Array(n).fill(0).map((_,index)=> index+1)
}
console.log(fillInNum(10))