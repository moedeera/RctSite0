import React, { useState, useEffect}  from 'react'

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const QuizHouse = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({

        name:'',
        email:'',
        password :'',
        password2: ''
        });
        
        const { name, email, password, password2 } = formData;
        const onChange = e =>
        setFormData({...formData, [e.target.name]:e.target.value})


        const onSubmit = async e => {
            e.preventDefault();
            if (password !== password2){
         
                console.log('passwords do not match')
            } else {
            
            const newUser = {
            name,
            email,
            password
            }
            try {
                const config = {
                    headers:{
                        'Content-Type':'application/json'
                         } }
             const body = JSON.stringify(newUser)
             const res = await axios.post('http://localhost:9700/api/users',body, config)             
                console.log(res)
            } catch (err) {
                console.error(err)
            }
            
            }

navigate("profile")

            }
            

              
              
    return (
        <div>

            <div className='Showcase Quiz'>

             <div className='SideCase'>
     
              <h1 style={{lineHeight:'1.8em'}}>Are you up for the Challenge?</h1> 
                 
                 
                 <form className='QuizForm'
                  onSubmit = {e=>onSubmit(e)}
                 >
     <label>
         <h2>Register today </h2></label>    
     <input 
          type="name" 
          placeholder="Name" 
          name="name"
          value = {name}
          onChange = {e =>onChange(e)}/> 


      <input 
          type="email" 
          placeholder="Email" 
          name="email"
          value = {email}
          onChange = {e =>onChange(e)}/> 
        
      <label>password</label>
      <input 
          type="password" 
          placeholder="Enter a password" 
          name="password"
          value = {password}
          onChange = {e =>onChange(e)}
          />
           
     <label>Re-enter password</label>
          <input 
          type="password" 
          placeholder="Enter a password" 
          name="password2"
          value = {password2}
          onChange = {e =>onChange(e)}/>

      <input type='submit' value='Register' />
                  </form>
                  </div> 
                 
                                 

             <div className='SideCase'>
                        <div className='SideImage'> <i class="fab fa-algolia fa-8x" 
                       style={{transform:' rotate(20deg)'}}
                        ></i> <h1>QuizHouse</h1> </div> 
                        <div className='SideText'> 
                        What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing 
and typesetting industry. Lorem Ipsum has been the
 industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and 
  scrambled it to make a type specimen book. It has
  survived not only five centuries, but also the leap
   into electronic typesetting, remaining essentially
    unchanged. 
             </div> </div>


            </div>
           
        </div>
    )
}

export default QuizHouse
