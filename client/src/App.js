import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Portfolio from './pages/Portfolio';
import Table from './components/Table';
import About from './pages/About';
import Contact from './pages/Contact';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';

function App() {
  // const [state,setState]=useState(0);
  // console.log(state)
  // const Change = (x) =>{
  
  
  //     setState(x)
  
  //     console.log(x)
  // }
  



  return (
    <Router>
    <div className="App">
    <Navbar />

      {/* <ul>
        <li><a href='/navbar'>Navbar</a></li>
        <li><a href='/homepage'>Homepage</a></li>
        <li><a href='/Table'>Table</a></li>
  
      </ul> */}
      <Routes>
      
      <Route path='/' element={<Homepage />} />
      <Route path='/Table' element={<Table />} />

      <Route path='/Portfolio' element={<Portfolio />} />
      <Route path='/About' element={<About />} />
      <Route path='/Contact' element={<Contact />} />

      </Routes>
    </div>
    </Router>
  );
}

export default App;
