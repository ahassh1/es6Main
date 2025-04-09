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



