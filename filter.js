let numbers = [1, 2, 3,4,5]

let evenNum = numbers.filter((item)=>{
return item%2 ==0
})

console.log(evenNum)

const data=[
    {
        name: "Nitya",
        age: 29
    },
    {
        name: "Nithan",
        age: 32

    },
    {
        name: "Chinnu",
        age: 1
    }
]

let adults = data.filter((item)=>{
    return item.age >18
})

console.log(adults)

let numberArr = [8,7,1, 2, 3,4,5,1,3,5,7,15]

let nonDup = numberArr.filter((item,index,arr)=>{
    return arr.indexOf(item)==index
})
console.log(nonDup)