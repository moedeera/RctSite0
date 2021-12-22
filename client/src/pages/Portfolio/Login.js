import React, { useState, useEffect}  from 'react'

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
   




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
         <h2>Login</h2></label>    


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

                  </form>


                  <small>Don't have an account? <a href="/Register">Register</a>     </small>       
        
                  
                  </div> 
                 
                                 

             <div className='SideCase'>
                        <div className='SideImage'> <i class="fab fa-algolia fa-8x" 
                       style={{transform:' rotate(20deg)'}}
                        ></i> <h1>QuizHouse</h1> </div> 
                        <div className='SideText'> 
                        What is QuizHouse?
QuizHouse is a social website that allows you to  
compete against other via fun puzzles and quizes
. QuizHouse been the
 industry's standard dummy quiz game ever since the 1990s,
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

export default Login