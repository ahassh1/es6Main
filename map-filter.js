const numbers =[3,6,7,8,9]

    const output =[]
for(let i=0; i<numbers.length; i++){
    const element = numbers[i];
    const result =element*element;
    output.push(result);
}
console.log(output)
////////////////////////////////////////////////////////////

function squre(element){
    return element*element
}
numbers.map(function(element,index,array){
    console.log(element,index,array)
})

const total = numbers.map(element => element*element);
console.log(total)

const  bigger = numbers.filter(x => x<5);
console.log(bigger)

const higher = numbers.find(x=> x>5)
console.log(higher)