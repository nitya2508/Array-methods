// while working on objects we can use for in

let capitals = {Karnataka:'Bengaluru', TamilNadu: 'Chennai', rajasthan:'jaipur'}
let countries = ['India','Srilanka','Nepal']

for(let prop in capitals){
    console.log("capital of",prop,'is',capitals[prop])
}
for(let prop in countries){
    console.log(countries[prop], 'is',prop)
}
