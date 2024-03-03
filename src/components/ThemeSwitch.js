// ThemeSwitch.js
import React from 'react';
// import { useTheme } from './context/ThemeContext';
import Switch from 'react-switch';
import { CssVarsProvider, useColorScheme } from '@mui/material-next/styles';
import './styles/ThemeSwitch.css';

const ThemeSwitch = () => {
  // const { themeMode, toggleThemeMode } = useTheme();
  const { mode, setMode } = useColorScheme();

  const handleThemeChange = () => {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
    // localStorage.setItem('themeMode', mode); 
  };

  return (
    <CssVarsProvider>
      <div className="theme-switch-container">
        <span className="theme-label">Enable Dark Theme: </span>
        <label className="theme-switch">
          <Switch
            onChange={() => handleThemeChange()}
            checked={mode === 'dark'}
            uncheckedIcon={false}
            checkedIcon={false}
            height={24}
            width={48}
            onColor="#2196F3"
            offColor="#D3D3D3"
          />
        </label>
        <span className="theme-text">{mode === 'dark' ? 'Dark' : 'Light'}</span>
      </div>
    </CssVarsProvider>  
  );
};

export default ThemeSwitch;
