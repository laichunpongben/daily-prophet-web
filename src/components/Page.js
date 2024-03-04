// Page.js]
import React, { useEffect } from 'react';
import { useColorScheme } from '@mui/material-next/styles';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { parseJwt } from './Auth';
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
      // check for token exp, default expire for Google Sign-in is 1 hr
      const decodedToken = parseJwt(storedToken);
      const expire = decodedToken.exp;
      console.log('expire: ', expire);

      const current = Math.ceil(Date.now() / 1000);
      console.log('current: ', current);

      if (expire > current) {  // expire is in the future
        console.log("Restore token from local!")

        setToken(storedToken);
        setUserId(storedUserId);
        setUserEmail(storedUserEmail);
        setUserName(storedUserName);
  
        setView('feed');
      } else {
        console.log("Token expired!")

        localStorage.removeItem('authToken');
        localStorage.removeItem('userId');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userName');
      }
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

  const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
  }));

  return (
    <div className="wrapper">
      <CssBaseline />
      <TabContext value={view}>
        <StyledBox sx={{
          display: 'flex', 
          justifyContent: 'center', 
          padding: 0, 
          margin: 0, 
          position: 'fixed',
          top: 0,
          width: '100vw',
          zIndex: 1,
        }}>
          <TabList onChange={handleTabChange} aria-label="top navigation bar">
            <Tab label='Feed' value='feed'/>
            <Tab label='Setting' value='setting' />
            <Tab label='Login' value='login' />
          </TabList>
        </StyledBox>
        <Box sx={{
          display: 'flex', 
          justifyContent: 'center', 
          padding: 0, 
          margin: 0,
          marginTop: 6,
        }}>
          <TabPanel value="feed" sx={{padding: 0, margin: 0}}>
            <FeedView />
          </TabPanel>
          <TabPanel value="setting" sx={{padding: 0, margin: 0}}>
            <SettingView />
          </TabPanel>
          <TabPanel value="login" sx={{padding: 0, margin: 0}}>
            <LoginView />
          </TabPanel>
        </Box>
      </TabContext>
    </div>
  );
}

export default Page;
