// push, pop, shift, unshift, 

let characters = ['Tom','Jerry','Bheem','Khalia']
console.log(characters)

characters.push('Chutki')
console.log(characters)

characters.pop()
console.log(characters)

characters.shift()
console.log(characters)

characters.unshift('Krishna','Indu')
console.log(characters)

characters.sort()
console.log(characters)

characters.reverse()
console.log(characters)

characters.splice(2,1)
console.log(characters)

characters.splice(1,'dholu')
console.log("=====",characters)

characters.splice(1,1,'bholu','dholu')
console.log(characters)

characters.push('Tom')
console.log(characters)

characters.push('Indu')
console.log(characters)

console.log(characters.indexOf('Indu'))
console.log(characters.lastIndexOf('Indu'))

console.log(characters.indexOf('Ram'))