// Header.js
import React from 'react';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useView } from './context/ViewContext';
import './styles/Header.css';

function Header() {
  const { view, handleViewChange } = useView(); 

  const handleTabChange = (event, newValue) => {
    handleViewChange(newValue);
  };

  return (
    <div className={`header-container`}>
      <Box>
        <TabContext value={view}>
          <TabList onChange={handleTabChange} aria-label="top navigation bar">
            <Tab label='Feed' value='feed'/>
            <Tab label='Setting' value='setting' />
            <Tab label='Login' value='login' />
          </TabList>
        </TabContext>
      </Box>
    </div>
  );
}

export default Header;
