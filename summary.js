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

const number =[2,4,567,8,7,8,66,8];
const newNumber = number.map(num=> num*num);
console.log(newNumber)

const numbers =[2,4,567,8,7,8,66,8];
const newNumbers = numbers.map(num=>{
    return num*num;
});
console.log(newNumbers)