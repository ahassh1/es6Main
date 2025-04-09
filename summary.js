const person = {
    name:'polash',
    age:24,
    1:85,
    father:{
        job:'reading',
        age:55
    }
}

console.log(Object.keys(person));
console.log(Object.values(person))
console.log(Object.entries(person));

console.log(person.age)
console.log(person['age'])
console.log(person[1])
console.log(person?.mother?.job)

///////////////////////////////
const number =[2,4,567,8,7,8,66,8];
const newNumber = number.map(num=> num*num);
console.log(newNumber)

const numbers =[2,4,567,8,7,8,66,8];
const newNumbers = numbers.map(num=>{
    return num*num;
});
console.log(newNumbers)
///////////////////////////////////

const product = [
    { id: 1, brand: 'iphone', color:'gold' },
    { id: 2, brand: 'shomio', color:'black'},
    { id: 3, brand: 'howe' ,color: 'white'},
    { id: 4, brand: 'aoigfj',color:'gold' }
];

/////////////////////////////////////
product.forEach(p=>console.log(p))
product.forEach(p=>{
    if(p.brand==='iphone'){
        console.log(p);
    }
})

////////////////////////////
const newProduct = product.filter(p=> p.color==='gold')
const newProducts = product.filter(p=> p.id!=3)
console.log(newProduct)
console.log(newProducts)
////////////////////////

