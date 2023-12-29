import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import logo from '../../logo-color.png';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = ({mode, setMode}) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    // Your search logic goes here
    navigate(`/search/:${query}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <nav className='navbar'>
      <div className='logo'>
        <Link to="/"><img src={logo} alt='' /></Link>
      </div>
      <div className='links'>
        <form onSubmit={handleSubmit}>
          <input type='text' value={query} onChange={(e) => { setQuery(e.target.value) }} placeholder='Search...'/>
          <FontAwesomeIcon icon={faSearch} className='search-icon' />
        </form>  
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <div className='mode-toggle' onClick={() => setMode(!mode)}>
          {mode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
