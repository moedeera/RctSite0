import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Portfolio from './pages/Portfolio';
import Table from './components/Table';
import About from './pages/About';
import Contact from './pages/Contact';
import QuizHouse from './pages/Portfolio/QuizHouse';
import Profile from './pages/Portfolio/Profile';
import RT from './components/RT';
import Login from './pages/Portfolio/Login';
import {useSelector} from "react-redux"
import { bindActionCreators } from 'redux';
import { actionCreators } from './State/index';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';


function App() {
const account = useSelector((state)=>state.account);
 const dispatch = useDispatch();

 const {depositMoney, withDrawMoney} = bindActionCreators(actionCreators,dispatch)


console.log(account)


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
      <Route path='/QuizHouse' element={<QuizHouse />} />
      <Route path='/Register' element={<QuizHouse />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Profile' element={<Profile />} />
      <Route path='/RT' element={<RT />} />
      <Route path='*' element={<RT />} />
   

      </Routes>
      <h>{account}</h>
 <button onClick={()=>depositMoney(1000)}>Add</button>
 <button onClick={()=>withDrawMoney(1000)}>Subtract</button>

    </div>
    </Router>
  );
}

export default App;
