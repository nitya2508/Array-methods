let numbers = [1, 2, 3,4,5]

let a=numbers.map((item)=>
    item*3
)
console.log(numbers,a);

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
let res = products.map((item)=>({
product_name: item.name,
total_price: (item.count * item.price)

}))
console.log(res)

let str = ['1', '2', '3','4','5']

let num = str.map(Number)

console.log(str,'===>',num)
