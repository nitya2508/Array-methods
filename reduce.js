let numbers = [1, 2, 3,4,5]

let sum = numbers.reduce((acc,item)=>{
    return acc+ item
},0)

console.log(sum)

//find the highest number

let highestNum = numbers.reduce((acc,item, index,arr)=>{
    if(acc>item){
        
        return acc
    }else{
        
        return item
    }
})

console.log(highestNum)

const products = [
    {
        name:'laptop',
        price:1000,
        count:3
    },
    {
        name:'tv',
        price:2000,
        count:5
    },
    {
        name:'desktop',
        price:3000,
        count:10
    }]

    let totalValue = products.reduce((acc,val)=>{
        return acc + (val.count * val.price)
    },0)
    console.log(totalValue)