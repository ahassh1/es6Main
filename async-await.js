const loadData= async() => {
   try{
    console.log('this is first')
    console.log('this is second')

    const response=await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data= await response.json()
    console.log(data)

    const result= 10+20;
    console.log(result)
    console.log('this is third')
   }
   catch{
    console.log('error')
   }
}
loadData()

///////////////////////////////////////
async function fetchData(){
    const response  = await fatch('');
    const data = await response.json();
    console.log(data)
}