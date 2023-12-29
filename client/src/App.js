import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Products from './Pages/Products/Products';
import logo from './logo-color.png';
import './App.css';

function App() {
  // State to track the current mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle function to switch between dark and light mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Dynamically set the body class based on the mode
  const bodyClass = isDarkMode ? 'dark-mode' : 'light-mode';

  return (
    <Router>
      <div className={`${bodyClass}`}>
        <nav className='navbar'>
          <div className='logo'>
            <Link to="/"><img src={logo} alt='' /></Link>
          </div>
          <div className='links'>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
          </div>
          <div className='mode-toggle' onClick={toggleDarkMode}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
