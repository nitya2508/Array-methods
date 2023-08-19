let cat = {name:'mewo',type:'cat'}
let dog = {name:'simba',type:'dog'}

let animals = [cat,dog]
console.log(animals)

animals.push({name:'abc',type:'tiger'})
console.log(animals)

cat.age=5
dog['age']=8

console.log(animals)

animals[0].food='milk'
animals[1]['food']='meat'
console.log(animals)
