
import React from 'react'
import { useState, useReducer, useEffect } from 'react'

export const Reducers = () => {
    const [asc, setAsc] = useState(true)
    const [num, setNum] = useState(true)
  


  
    function reducer (state,action){
switch(action.type){
case 'GenderSwap':  

return state.map((x)=>{
        if (x.rank===action.payload)
    {return {...x, gender:!x.gender}}
else {return x}})



case 'AlphOrder':
if (action.payload===true){
    setAsc(false)
 return   [...state].sort((a,b) => (a.name> b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
} 
else if (action.payload===false)
{    setAsc(true)
     return [...state].sort((a,b) => (b.name> a.name) ? 1 : ((a.name > b.name) ? -1 : 0))}
return

case 'NumOrder':

if(action.payload===true){
    setNum(false)
    return   [...state].sort((a,b) => (a.age> b.age) ? 1 : ((b.age > a.age) ? -1 : 0))
 } else if (action.payload===false){
     setNum(true)
     return   [...state].sort((a,b) => (b.age> a.age) ? 1 : ((a.age > b.age) ? -1 : 0))
 }
   return 

case 'Rank':

        return [...state].map((x)=>{return {...x,rank:state.indexOf(x)+1}})
        
    default:
        return state

}

    }

    const [state, dispatch]= useReducer(reducer,
        
        [
            {rank:1,name:'Frank', age:25, gender:true},
            {rank:2,name:'Steve', age:35, gender:true},
            {rank:3,name:'Natalie', age:22, gender:false},
            {rank:4,name:'Judy', age:19, gender:false}])
    const [Form, SetForm]= useState({name:'',age:'', select:'Sam'})
  
    const {name, age, select }=Form
  
    useEffect(()=>{

dispatch({type:'Rank', payload:''})},[asc,num]
    )
  



  
  
      return (
          <div className="Table">
              <h3>Table 4 : Reducers</h3>
               <div className="Standings">
                     <div className="column">
                            <div> <h3>#</h3></div>
                            <div onClick = {()=>dispatch({type:'AlphOrder', payload:asc})} > <h3 >Name</h3></div>
                            <div onClick = {()=>dispatch({type:'NumOrder', payload:num})}> <h3 >Age</h3></div>
                            <div> <h3>X/Y</h3></div>
                     </div>
              {state.map((profile)=>(
                         <div key={profile.rank} className="column" >
                         <div> <h3>{profile.rank}</h3></div>
                         <div> <h3>{profile.name}</h3></div>
                        <div> <h3>{profile.age}</h3></div>
                        <div onClick = {()=>dispatch({type:'GenderSwap', payload:profile.rank})}> <h3>{profile.gender?'male': 'female'}</h3></div>
                                              
                        </div> ))
                        }       
                    </div>      
  
        <form className="form" 
        // onSubmit = {(e)=>onSubmission(e)}
        >
  
                        <label>Please Select the User You want to edit</label>
  
   <select 
   
    // onChange = {(e) =>onChange(e,'select')}
    name='select'
   >
                        {state.map((profile)=>(
                       <option key ={profile.rank} 
                     
                        value={profile.name}
                       >{profile.name}</option>     
                        ))}
                   
    
  
  </select>
        <label>Edit name: </label>
        <input 
            type="text" 
            placeholder="Name" 
            name="name"
            value = {name}
            // onChange = {(e) =>onChange(e,'name')}
             required /> 
       
        <label>Edit age:</label>
        <input 
            type="number" 
            placeholder="Age" 
            name="age"
            value = {age}
            // onChange = {(e) =>onChange(e,'age')}
             required />
             
              <input type='submit' value='Change' />
        
  
  
      </form>
  
  
          </div>
      )
  }
export default Reducers