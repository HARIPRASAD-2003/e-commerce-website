// Login.js

import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className='login-page'>
      <div className="login-container">
        <div className="image-container">
          {/* Add your image or design elements here */}
          <img src="" alt="Login" />
        </div>
        <div className="login-form">
          <h2>Login</h2>
          <form>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
