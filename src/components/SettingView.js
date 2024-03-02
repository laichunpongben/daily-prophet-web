import React from 'react';
import ThemeSwitch from './ThemeSwitch';
import PortfolioSetting from './PortfolioSetting';
import './styles/SettingView.css';

const SettingView = () => {
  return (
    <div className="setting-container">
      <div className="section">
        <div className="section-header">
          <p>Theme</p>
        </div>
        <div>
          <ThemeSwitch />
        </div>
      </div>
      <div className="section">
        <div className="section-header">
          <p>Portfolio</p>
        </div>
        <div>
          <PortfolioSetting />
        </div>
      </div>
    </div>
  );
};

export default SettingView;
