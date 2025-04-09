
const first  = () =>{
    second();
    console.log('i am first')
}
const second = () =>{
    third();
    console.log('i am third')
}
const third = () =>{
    console.log('hello i am third')
}


first();
console.log('i am the last item ');