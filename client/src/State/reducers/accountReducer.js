import axios from "axios"



const number =  120


const reducer = (state = number, action )=>{
switch(action.type){
case "LOAD-NUM":
  return action.payload
case "FETCH_DATA":
  return action.payload
  case "deposit":
 return state + action.payload;
case "withdraw":
    return state - action.payload;
  case "POST_DATA":
    state = action.payload
  return action.payload;  
default:
  return state;


}}


export default reducer 