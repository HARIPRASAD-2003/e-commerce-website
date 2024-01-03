// src/components/LoadingScreen.js
import React from 'react';
import prd1 from '../../logo-color.png'
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="netflix-logo">
        <div className="loading-spinner">
          <div className="loading-spinner-inner">
            <div className="loading-spinner-inner-most">
              <img src={prd1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;