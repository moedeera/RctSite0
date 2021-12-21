import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'

export const RT = () => {
    return (
        <Router>
        <div className="App">
     
    
        
            <li><a href='/homepage'>Homepage</a></li>
           
      
        
          <Routes>
          
          <Route path='/' element={<Homepage />} />
       
       
          </Routes>
        </div>
        </Router>
        
        );
}


export default RT
