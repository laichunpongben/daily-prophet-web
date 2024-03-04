// Page.js]
import React, { useEffect } from 'react';
import { useColorScheme } from '@mui/material-next/styles';
import CssBaseline from '@mui/material/CssBaseline';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import LoginView from './LoginView';
import FeedView from './FeedView';
import SettingView from './SettingView';
import { useAuth } from './context/AuthContext';
import { useView } from './context/ViewContext';
import './styles/Page.css';

function Page() {
  const { token, userId, userEmail, userName, setToken, setUserId, setUserEmail, setUserName } = useAuth();
  const { view, setView } = useView();
  const { mode, setMode } = useColorScheme();

  useEffect(() => {
    // Check local storage for token and user data
    const storedToken = localStorage.getItem('authToken');
    const storedUserId = localStorage.getItem('userId');
    const storedUserEmail = localStorage.getItem('userEmail');
    const storedUserName = localStorage.getItem('userName');

    // Load data from local storage if context values are null
    if (
      token === null && storedToken &&
      userId === null && storedUserId &&
      userEmail === null && storedUserEmail &&
      userName === null && storedUserName
    ) {
      setToken(storedToken);
      setUserId(storedUserId);
      setUserEmail(storedUserEmail);
      setUserName(storedUserName);

      setView('feed');
    }
  // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const storedMode = localStorage.getItem('mode');

    if (storedMode !== null && storedMode !== mode) {
      setMode(storedMode);
    }
  // eslint-disable-next-line
  }, []);

  const handleTabChange = (event, newTab) => {
    setView(newTab);
  };

  return (
    <div className="wrapper">
      <CssBaseline />
      <TabContext value={view}>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
          <TabList onChange={handleTabChange} aria-label="top navigation bar">
            <Tab label='Feed' value='feed'/>
            <Tab label='Setting' value='setting' />
            <Tab label='Login' value='login' />
          </TabList>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
          <TabPanel value="feed">
            <FeedView />
          </TabPanel>
          <TabPanel value="setting">
            <SettingView />
          </TabPanel>
          <TabPanel value="login">
            <LoginView />
          </TabPanel>
        </Box>
      </TabContext>
    </div>
  );
}

export default Page;
