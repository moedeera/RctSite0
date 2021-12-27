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



/// FETCH DATA
export const GetData = () =>{

return async (dispatch, getState) =>{

const response = await axios.post('http://localhost:9700/api/users')
console.log('it worked ', response.data.id)
dispatch({

type:"FETCH_POSTS",
payload: response.data.id

})

}



}
