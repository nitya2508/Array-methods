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

    let productName = products.find((item)=>{
        return item.count>8
    }).name

    console.log(productName)