import axios from "axios"

export const depositMoney = (amount) =>{

return (dispatch) =>{

dispatch ({
type:"deposit",
payload:amount

})}}





export const withDrawMoney=(amount)=>{
return (dispatch)=>{




    

dispatch({

    type:"withdraw",
    payload:amount

})
}

} 

export const Dummy = ()=>{
return async (dispatch,getState)=>{
console.log('hello Dummy')
try {
   const response = await axios.get('http://localhost:9700/api/users') 
   console.log(response)
} catch (error) {
    console.log(error)
}

    dispatch({
type:"LOAD-NUM",
payload:570

    })
}


}

/// FETCH DATA
export const GetData = () =>{

return async (dispatch, getState) =>{

const response = await axios.get('http://localhost:9700/api/users')
console.log('it worked ', response.data.id)
dispatch({

type:"FETCH_DATA",
payload: 170

})

}



}


export const PostData = (num) =>{
return async  (dispatch, getState) =>{

        const newUser ={
            id:num,
            name:"Heynow"
        }

  const config = {
    headers:{
        'Content-Type':'application/json'
         } }
         const body = JSON.stringify(newUser)
const response= await axios.post('http://localhost:9700/api/users', body, config)   


    
  
    console.log('it worked ', response.data.id)
    dispatch({
    
    type:"POST_DATA",
    payload: response.data.id
    
    })
    
    }};
    
    
    
    
    