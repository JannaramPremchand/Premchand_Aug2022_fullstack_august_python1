import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Problemslist from './components/Problemslist';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Problemslist/>
    </div>
  );
}

export default App;
