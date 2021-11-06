import React from 'react'
import './App.css';
import Singup from './pages/Singup/Singup.js';
import Main from './pages/Main/Main';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Singup/>}/>
            <Route path="/main" element={<Main/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;