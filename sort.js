let contestants = ['Nithan','Nitya','nithu','bebu','chinnu']

contestants.sort()

console.log(contestants)

let numbers = [77, 85, 43, 5,100, 364]

numbers.sort((a,b)=>{
    // 1. <0 a comes first
    // 2, 0 returns nothing
    // 3. >0 b comes first  
     return a-b
})
console.log(numbers)

numbers.sort((a,b)=>{
    // 1. <0 a comes first
    // 2, 0 returns nothing
    // 3. >0 b comes first  
     return b-a
})
console.log(numbers)

const products = [
    {
        name:'laptop',
        price:1000,
        count:3
    },
    {
        name:'desktop',
        price:3000,
        count:10
    },{
        name:'tv',
        price:2000,
        count:5
    }
]

products.sort((a,b)=> a.price - b.price)

console.log(products)
