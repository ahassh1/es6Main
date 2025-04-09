const a= 20;
const b = 30;

console.log('first item ')

// async start
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => console.log(data))

setTimeout(() =>{
 console.log( 'second items')
},3000)

setTimeout(task)
// async section end 

task()
console.log('third item ')

const result= a+b;
console.log(result)

function task(){
    console.log('last test')
}