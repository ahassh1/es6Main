person={
    name:'arlond donald',
    age:19,
    fatherName:'schwerznegger',
    address:'nilkeht',
    friends:['tom hanks', 'tom cruise','tom roland']
}
// console.log(person.address)
const {fatherName,age,address,friends,salary}=person;
console.log(fatherName,salary,age,friends)

const friendName = ['ahasan','tushar','ratul','siam','nahid']
const [cotoFriend ,nextitem,...restFriends]= friendName;
console.log(cotoFriend,nextitem,restFriends) 

//  complexObject={
//     name:'totoam',
//     info:{
//         addresss:'kola bagan',
//         marital: 'unmarid'
//     }
// }
// const {addresss}= complexObject;
// console.log(addresss)