import React from 'react'

export const QuizHouse = () => {
    return (
        <div>

            <div className='Showcase Quiz'>

             <div className='SideCase'>
     
              <h1>Welcome to QuizHouse <i class="fab fa-algolia "
              
              style={{transform:' rotate(20deg)'}}
              
              ></i> </h1> 
                 
                 
                 <form className='QuizForm'>
     <label>Register today </label>            
      <input 
          type="email" 
          placeholder="email" 
          name="name"/> 
        
      <label>password</label>
      <input 
          type="password" 
          placeholder="Enter a password" 
          name="password"/>
           
     <label>Re-enter password</label>
          <input 
          type="password" 
          placeholder="Enter a password" 
          name="password2"/>
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
