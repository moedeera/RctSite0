import React from 'react'



export const Homepage = () => {
    return (
        <div className='Main'>

        <div className='showcase'>
            <div className='image'></div>
            <div className='text'>
<h1>HELLO THERE!</h1>

<p>
I am a self-taught web developer who has 
been building websites since 2019. 
My projects mainly involve HTML, CSS,
 JavaScript and REACT for front
  end along with Express Node JS for backend.
  I also use ReactJS and other frameworks to build websites.
 <p></p>
   I also run a mentorship website
    that assists aspiring programmers 
    in achieving their goals by structuring their learning.
     If you are interested in contacting me for work/collaboration purposes,
      just send me a message and I will respond as soon as possible.  &#128540;
</p>


            </div>
        </div>
        <div className='Selections'>
                <div className='Unit'><a href='/Portfolio'>PORTFOLIO</a></div>
                   <div className='Unit'><a href='/Contact'>CONTACT</a> </div>
                <div className='Unit'><a href='/About'>ABOUT</a> </div>
             
                <div className='Unit'>SOCIAL MEDIA</div>
        </div>

        
              </div>
    )
}


export default Homepage