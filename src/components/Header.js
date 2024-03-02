// Header.js
import React from 'react';
import Login from './Login';
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

  return (
    <section className="buttons-section">
      <button className="header-button" onClick={handleFeedButtonClick}>
        Feed
      </button>
      <div className="button-space"></div>
      <button className="header-button" onClick={handleSettingButtonClick}>
        Setting
      </button>
      <div className="button-space"></div>
      <Login />
    </section>
  );
}

export default Header;
