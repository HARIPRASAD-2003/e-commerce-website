// src/components/LoadingScreen.js
import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="netflix-logo">
        <div className="loading-spinner"></div>
      </div>
      <div className="loading-text">Loading...</div>
    </div>
  );
};

export default LoadingScreen;