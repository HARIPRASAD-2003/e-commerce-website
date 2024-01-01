import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Products from './Pages/Products/Products';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import LoadingScreen from './Components/LoadingScreen/LoadingScreen';
import Login from './Pages/Auth/LoginPage';
import Signup from './Pages/Auth/Signup';
function App() {
if ('history' in window && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';

  window.addEventListener('popstate', () => {
    const scrollPosition = sessionStorage.getItem('scrollPosition');

    if (scrollPosition !== null) {
      window.scroll(0, parseInt(scrollPosition, 10));
    }
  });

  window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('scrollPosition', window.scrollY.toString());
  });
}

  const [mode, setMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className={(mode) ? 'light-mode' : 'dark-mode'}>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Router>
          <Navbar mode={mode} setMode={setMode} />
          <div className='invis'></div>
          <TransitionGroup>
            <CSSTransition key={window.location.key} className="fade" timeout={3000}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/search/:id" element={<Products />} />
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<Signup />}/>
              </Routes>
            </CSSTransition>
          </TransitionGroup>
        </Router>
      )}
      <footer>
        <p>&copy; 2023 TrendHub. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
