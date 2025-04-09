const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};
loadData();

//////////////////////////////////////////
const fetchData=() =>{
    return new Promise((resolve,reject) =>{
        const status = true;
        if(status){
            const mockData={
                json:()=>Peomise.resolve({name:'hero'})
            }
            resolve(mockData)
        }
        else{
            reject('server error')
        }
    })
}
fetchData()
.then(res => console.log(res))
.then(data=>console.log(data))
.catch(err=> console.log(err)) 

//////////////////////////////////////////////

const urls=[
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/comments/1',
  'https://jsonplaceholder.typicode.com/todos/1',  
  'https://jsonplaceholder.typicode.com/users/1'
]

Promise.all(urls.map(url => {
    return fetch(url).then(res=>res.json()).then
    (data=>data)
}))
.then(res=>res)
.then(data=>console.log(data))
.catch(error => console.log(error))