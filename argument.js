function add(num1,num2){
    console.log([...arguments])
    return num1+num2+arguments[2];
}
const result = add(3,4,7,10);
console.log(result)