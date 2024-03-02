// ThemeSwitch.js
import React from 'react';
import { useTheme } from './ThemeContext';
import Switch from 'react-switch';
import './styles/ThemeSwitch.css'; 

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-switch-container">
      <span className="theme-label">Enable Dark Theme: </span>
      <label className="theme-switch">
        <Switch
          onChange={toggleTheme}
          checked={theme === 'dark'} 
          uncheckedIcon={false}
          checkedIcon={false}
          height={24}
          width={48}
          onColor="#2196F3"
          offColor="#D3D3D3"
        />
      </label>
      <span className="theme-text">{theme === 'dark' ? 'Dark' : 'Light'}</span>
    </div>
  );
};

export default ThemeSwitch;
