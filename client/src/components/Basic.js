import React from 'react'

export const Basic = () => {

    const Array = [{rank:1,name:'Samuel', age:25, gender:true},{rank:2,name:'Billy', age:35, gender:true},{rank:3,name:'Johnathan', age:22, gender:true},{rank:4,name:'Ann', age:19, gender:false}]

    const Alpha = ()=>{
        Array.sort((a,b) => (a.name> b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
        console.log(Array)
    }
     const Numa = ()=>{
        console.log('Numa')
     
        }
    


    return (
        <div className ="Table">
                      <h3>Table 1: Simple Array</h3>
             <div className="Standings">
<div className="column">
                <div> <h3>#</h3></div>
               <div onClick= {()=>Alpha()}> <h3 >Name</h3></div>
                <div> <h3 onClick= {()=>Numa()}>Age</h3></div>
                <div> <h3>Gender</h3></div>
</div>
            {Array.map((profile)=>(
            <div key={profile.rank} className="column">
                 <div> <h3>{profile.rank}</h3></div>
                <div> <h3>{profile.name}</h3></div>
                <div> <h3>{profile.age}</h3></div>
                <div> <h3>{profile.gender?'male': 'female'}</h3></div>
                 
                                           
            </div>
            
   ///////////////////////////////////////////////////         
            
            
            ))}

             </div>
        </div>
    )
}


export default Basic