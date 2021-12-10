import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
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
      </ul>
      <Routes>
      <Route path='/navbar' element={<Navbar />} />
      <Route path='/homepage' element={<Homepage />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
