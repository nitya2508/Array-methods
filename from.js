let numbers = [1,2,3,4,3,2,4,1,5,4,5,3,2,3,4]

let res = Array.from(new Set(numbers))

console.log(res)

let str = "nityashree"

let res1 = Array.from(str)
console.log(str.split(''))
console.log(res1)

console.log(res1.join(''))


let number = [1,{name:'nitya'},2,4,1,5,4,5,3,2,3,4]

let val = number.filter((item)=>{
  return  typeof(item)==='object'
   

})

console.log(val)
