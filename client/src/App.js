import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Basic from './components/Basic';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      MERN app
      <ul>
        <li><a href='/navbar'>Navbar</a></li>
        <li><a href='/homepage'>Homepage</a></li>
        <li><a href='/basics'>Basic Table</a></li>
      </ul>
      <Routes>
      <Route path='/navbar' element={<Navbar />} />
      <Route path='/homepage' element={<Homepage />} />
      <Route path='/basics' element={<Basic />} />

      </Routes>
    </div>
    </Router>
  );
}

export default App;
