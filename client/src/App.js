import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Products from './Pages/Products/Products';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import LoadingScreen from './Components/LoadingScreen/LoadingScreen';

function App() {
  const [mode, setMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay (e.g., API calls, data fetching)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Set the time as needed
  }, []);
  return (
    <div className={mode ? 'light-mode' : 'dark-mode'}>
      {isLoading ? <LoadingScreen /> : 
      <Router>
          <Navbar mode={mode} setMode={setMode}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/search/:id" element={<Products />}/>
          </Routes>
        {/* </div> */}
      </Router>}
      <footer>
        <p>&copy; 2023 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
