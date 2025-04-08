function getFullName(firstName, lastName){
    let fullName =''
    console.log(arguments);
    for (let i = 0; i < arguments.length; i++) {
        const namePart = arguments[i];
        
        fullName = fullName + ' ' + namePart;
    }
        return fullName
} 
const allName = getFullName('ahsan' ,'habib','palash','pial ahamed','jalib','sakib','nazmuj sakib');
console.log(allName)