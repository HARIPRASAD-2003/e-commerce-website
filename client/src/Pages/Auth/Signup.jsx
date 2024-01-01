// Signup.js
import logo from '../../logo-color.png';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [user, setuser] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignup = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/signup${user?'':'-sellers'}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });
  
      if (response.ok) {
        // Handle successful signup
        console.log('Signup successful!');
        alert('success');
        navigate('/login');
      } else {
        // Handle signup error
        const errorData = await response.json();
        throw new Error('Signup failed:' + errorData.message);
      }
    } catch (error) {
      // Handle network or other errors
      console.log('Error during signup:' +  error.message);
      alert("error signup: " + error.message);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateUsername(username) && validatePassword(password)){
        // alert('valid');
        handleSignup();
        return;
    }
  }

  const validateUsername = (value) => {
    const usernameRegex = /^[a-zA-Z_ ]*$/;
    const consecutiveSpacesRegex = / {2}/;
    const minLength = 8;

    if (!usernameRegex.test(value)) {
      alert('Username must not contain numbers, symbols, or any special characters except "_" and space.');
      return false;
    }

    if (consecutiveSpacesRegex.test(value)) {
      alert('No consecutive spaces are allowed.');
      return false;
    }

    if (value.length < minLength) {
      alert(`Username must be at least ${minLength} characters long.`);
      return false;
    }

    return true;
  };
  const validatePassword = (value) => {
    const minLength = 8;
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const numericRegex = /\d/;
    const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;

    if (value.length < minLength) {
      alert(`Password must be at least ${minLength} characters long.`);
      return false;
    }

    if (!lowercaseRegex.test(value) || !uppercaseRegex.test(value) || !numericRegex.test(value) || !symbolRegex.test(value)) {
      alert('Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.');
      return false;
    }

    // Check if the password is the same as the username or email
    if (value === username || value === email) {
      alert('Password must not be the same as the username or email.');
      return false;
    }

    return true;
  };



  return (
    <div className='signup-page'>
      <div className="signup-container">
        <div className="image-container">
          <img src={logo} alt="Signup" />
        </div>
        {(user)?<div className="signup-form">
          <form onSubmit={(e) => handleSubmit(e)}>
            <h2>Signup as User</h2>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" placeholder='Username' onChange={(e) => setUsername(e.target.value)} required/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <div className="password-input">
                <input type={showPassword ? 'text' : 'password'} id="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <span className="eye-icon" onClick={togglePasswordVisibility}>
                  {showPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                </span>
              </div>
            </div>
            <button type="submit">Signup</button>
            <p>Already have an account? <Link to='/login' style={{color:'blue', textDecoration:'none'}}>Login</Link></p>
          <div onClick={(e) => setuser(false)}>
            <button type='button'>Signup as Seller</button>
          </div>
          </form>
        </div>:<div className="signup-form">
          <form onSubmit={(e) => handleSubmit(e)}>
            <h2>Signup as Seller</h2>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" placeholder='Username' onChange={(e) => setUsername(e.target.value)} required/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <div className="password-input">
                <input type={showPassword ? 'text' : 'password'} id="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <span className="eye-icon" onClick={togglePasswordVisibility}>
                  {showPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                </span>
              </div>
            </div>
            <button type="submit">Signup</button>
            <p>Already have an account? <Link to='/login' style={{color:'blue', textDecoration:'none'}}>Login</Link></p>
          <div onClick={(e) => setuser(true)}>
            <button type='button'>Signup as User</button>
          </div>
          </form>
        </div>}
      </div>
    </div>
  );
};

export default Signup;
