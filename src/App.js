import './App.css';
import React, { useState } from 'react';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TestForm from './Components/TestForm';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => { // Function to set the modes based on the color parameter
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#292d31';
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'Text Utils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'warning');
      document.title = 'Text Utils';
    }
  }

  const toggleColor = (color) => {
    // document.title = `Text Utils - ${color.charAt(0).toUpperCase() + color.slice(1)} Mode`;
    setMode('light');
    if (color === 'primary') {
      document.body.style.backgroundColor = '#0d6efd';
      showAlert('Blue mode has been enabled', 'primary');
    } else if (color === 'danger') {
      document.body.style.backgroundColor = '#dc3545';
      showAlert('Red mode has been enabled', 'danger');
    } else if (color === 'success') {
      document.body.style.backgroundColor = '#198754';
      showAlert('Green mode has been enabled', 'success');
    } else if (color === 'warning') {
      document.body.style.backgroundColor = '#ffc107';
      showAlert('Yellow mode has been enabled', 'warning');
    }
  }

  return (
    <>
      <Router basename="/textUtils-app">
        <Navbar title="Text Utils" about="About Text Utils" mode={mode} toggleMode={toggleMode} toggleColor={toggleColor} />
        <Alert alert={alert} />
        <div className="container my-3 px-5">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TestForm heading="Enter your text to analyze" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
