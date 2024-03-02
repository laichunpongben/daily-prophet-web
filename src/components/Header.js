// Header.js
import React from 'react';
import { useView } from './ViewContext'; 
import './styles/Header.css';

function Header() {
  const { handleViewChange } = useView(); 

  const handleFeedButtonClick = () => {
    console.log('Current View: Feed');
    handleViewChange('feed'); 
  };

  const handleSettingButtonClick = () => {
    console.log('Current View: Setting');
    handleViewChange('setting');
  };

  const handleLoginButtonClick = () => {
    console.log('Current View: Login');
    handleViewChange('login');
  };

  return (
    <div className="header-container">
      <button className="header-button" onClick={handleFeedButtonClick}>
        Feed
      </button>
      <div className="button-space"></div>
      <button className="header-button" onClick={handleSettingButtonClick}>
        Setting
      </button>
      <div className="button-space"></div>
      <button className="header-button" onClick={handleLoginButtonClick}>
        Login
      </button>
    </div>
  );
}

export default Header;
