import Navbar from './components/Navbar';
import Homepage from './components/Homepage';

import Table from './components/Table';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';

function App() {
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

      </Routes>
    </div>
    </Router>
  );
}

export default App;
