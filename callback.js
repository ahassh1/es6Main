function welComeGuest(name,greetHandler){
    greetHandler(name)
}
 const actorName = 'tom hanks'
 function greetMorning(name){
    console.log('good Morning',name)
 }
 function greetEvening(name){
    console.log('good Evening',name)
 }
 welComeGuest(actorName,greetEvening)
 welComeGuest('habib',greetMorning)
 welComeGuest('sakib khan',function(name){
    console.log('special welcome',name);
 })