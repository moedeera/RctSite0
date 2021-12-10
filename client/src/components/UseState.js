import React from 'react'
import { useState } from 'react'

export const UseState = () => {

    const [asc, setAsc] = useState(true)
    const [num, setNum] = useState(true)
    var newArr
    const [Array2,SetArray] = useState([
        {rank:1,name:'Sam', age:25, gender:true},
        {rank:2,name:'Bill', age:35, gender:true},
        {rank:3,name:'John', age:22, gender:true},
        {rank:4,name:'Sarah', age:19, gender:false}]
    )
    const Alpha2 = ()=>{
     
   if (asc===true){
        newArr = [...Array2].sort((a,b) => (a.name> b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
      setAsc(false)
    }
   else if(asc=== false ){
        newArr = [...Array2].sort((a,b) => (b.name> a.name) ? 1 : ((a.name > b.name) ? -1 : 0))
        setAsc(true)
           }     
   for (var j=0; j<newArr.length; j++){
       newArr[j].rank= j+1
   } 
   SetArray(newArr)
   }
   //////////
   const Numa2 = ()=>{
       if (num===true){
           newArr = [...Array2].sort((a,b) => (a.age> b.age) ? 1 : ((b.age > a.age) ? -1 : 0))
         setNum(false)
       }
      else if(num=== false ){
           newArr = [...Array2].sort((a,b) => (b.age> a.age) ? 1 : ((a.age > b.age) ? -1 : 0))
           setNum(true)
              }     
      for (var j=0; j<newArr.length; j++){
          newArr[j].rank= j+1
      } 
      SetArray(newArr)
   
   
   }
    
   const GenderSwap = (x)=>{
   
   SetArray(Array2.map((person)=>person.rank===x ? {...person, gender: !person.gender}:person))
   
   
   }
   





    return (
        <div className="Table">
            <h3>Table 2 : Array Using useState</h3>
             <div className="Standings">
                   <div className="column">
                          <div> <h3>#</h3></div>
                          <div onClick= {()=>Alpha2()}> <h3 >Name</h3></div>
                          <div onClick= {()=>Numa2()}> <h3 >Age</h3></div>
                          <div> <h3>X/Y</h3></div>
                   </div>
            {Array2.map((profile)=>(
                       <div key={profile.rank} className="column" onClick = {()=>GenderSwap(profile.rank)}>
                       <div> <h3>{profile.rank}</h3></div>
                       <div> <h3>{profile.name}</h3></div>
                      <div> <h3>{profile.age}</h3></div>
                      <div> <h3>{profile.gender?'male': 'female'}</h3></div>
                                            
                      </div> ))
                      }       
                  </div>       
        </div>
    )
}
export default UseState