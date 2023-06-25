let numbers = [1, 2, 3,4,5]
let sum = 0;
numbers.forEach((item,index,arr)=>{
    console.log(`a[${index}]= ${item}`)
    sum += item
})
console.log(numbers);
console.log(sum)

const letters = ['a', 'b', 'c', 's', 'p', 'a','a', 'p', 'c','t','t']
let count={}

letters.forEach((item)=>{
    if(count[item]){
        count[item]++;
    }else{
        count[item]=1
    }
})
console.log(count)