import axios from "axios"



// const getNumber = async () =>{
  const newUser = {
    name:'johnnyu'
  }

  
//   try {

//   const config = {
//     headers:{
//         'Content-Type':'application/json'
//          } }
//          const body = JSON.stringify(newUser)
// number = await axios.post('http://localhost:9700/api/users', body, config)   


  
// } catch (error) {
//   console.log(error)
// }

// }
const getNumber = async () =>{
var x 
  const newUser = {
    name:'johnnyu'
  }



try {
    const config = {
    headers:{
        'Content-Type':'application/json'
         } }
         const body = JSON.stringify(newUser)
const res = await axios.post('http://localhost:9700/api/users', body, config)   
console.log(res.data)
x = res.data.id  
} catch (error) {
  console.log(error)
}

return x

}

console.log('hello')
var y =  getNumber();
console.log(y)
var number = 120 


const reducer = (state = number
  
  
  
  
  , action )=>{


switch(action.type){
case "deposit":







     return state + action.payload;
case "withdraw":
    return state - action.payload;
default:
  return state;


}}


export default reducer 