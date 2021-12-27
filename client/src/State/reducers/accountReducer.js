import axios from "axios"



const number =  120


const reducer = (state = number, action )=>{
switch(action.type){
case "FETCH_GET":
  return action.payload
  case "deposit":
 return state + action.payload;
case "withdraw":
    return state - action.payload;
default:
  return state;


}}


export default reducer 