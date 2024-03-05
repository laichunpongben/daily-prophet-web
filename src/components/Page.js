// Page.js
import React, { useEffect, useState, useRef } from 'react';
import { useColorScheme } from '@mui/material-next/styles';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import FeedIcon from '@mui/icons-material/Feed';
import SettingsIcon from '@mui/icons-material/Settings';
import { parseJwt } from './Auth';
import FeedView from './FeedView';
import SettingView from './SettingView';
import LoginView from './LoginView';
import AboutView from './AboutView';
import BlankView from './BlankView';
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

  const StyledIconButton = styled(IconButton)(({ theme }) => ({
    color: theme.palette.text.secondary,
  }));

  const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    color: theme.palette.text.secondary,
  }));

  const [menuOpen, setMenuOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setMenuOpen((prevOpen) => !prevOpen);
  };

  const handleMenuClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setMenuOpen(false);
  };

  const handleMenuLoginClick = (event) => {
    handleMenuClose(event);
    setView('login');
  };

  const handleMenuAboutClick = (event) => {
    handleMenuClose(event);
    setView('about');
  };

  function handleListKeyDown(event) {
    console.log("key down");
    if (event.key === 'Tab') {
      event.preventDefault();
      setMenuOpen(false);
    } else if (event.key === 'Escape') {
      setMenuOpen(false);
    }
  }

  const prevOpen = useRef(menuOpen);
  useEffect(() => {
    if (prevOpen.current === true && menuOpen === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = menuOpen;
  }, [menuOpen]);

  return (
    <div className="wrapper">
      <CssBaseline />
      <TabContext value={view}>
        <StyledBox x={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            padding: 0, 
            margin: 0, 
            position: 'fixed',
            top: 0,
            zIndex: 1,
          }}>
          <StyledBox sx={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            padding: 0, 
            margin: 0, 
            position: 'fixed',
            top: 0,
            zIndex: 1,
            width: '100vw',
          }}>
            <TabList onChange={handleTabChange} aria-label="top navigation bar">
              <Tab icon={<FeedIcon />} value='feed'/>
              <Tab icon={<SettingsIcon />} value='setting' />
              <Tab label='Login' value='login' sx={{display: 'none'}} />  { /* hidden */}
              <Tab label='About' value='about' sx={{display: 'none'}} />  { /* hidden */}
              <Tab label='Blank' value='blank' sx={{display: 'none'}} />  { /* hidden */}
            </TabList>
          </StyledBox>
          <StyledBox sx={{
            display: 'flex', 
            justifyContent: 'flex-end', 
            justifyItems: 'flex-end', 
            justifySelf: 'flex-end', 
            alignItems: 'center',
            padding: 0, 
            margin: 0, 
            position: 'fixed',
            top: 0,
            right: 0,
            zIndex: 2,
          }}>
            <StyledIconButton 
            ref={anchorRef}
            id="composition-button"
            aria-label="more"
            aria-controls={menuOpen ? 'composition-menu' : undefined}
            aria-expanded={menuOpen ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}>
              <MoreVertIcon />
            </StyledIconButton>
            <Popper
              open={menuOpen}
              anchorEl={()=> anchorRef.current}  // anchorRef only does not work
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === 'bottom-start' ? 'left top' : 'left bottom',
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleMenuClose}>
                      <MenuList
                        autoFocusItem={menuOpen}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        onKeyDown={handleListKeyDown}
                      >
                        <StyledMenuItem onClick={handleMenuLoginClick}>
                          <ListItemText 
                            primary="Login"
                            primaryTypographyProps={{ variant: 'button' }} />
                        </StyledMenuItem>
                        <StyledMenuItem onClick={handleMenuAboutClick}>
                          <ListItemText 
                            primary="About"
                            primaryTypographyProps={{ variant: 'button' }} />
                        </StyledMenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </StyledBox>
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
          <TabPanel value="about" sx={{padding: 0, margin: 0}}>
            <AboutView />
          </TabPanel>
          <TabPanel value="blank" sx={{padding: 0, margin: 0}}>
            <BlankView />
          </TabPanel>
        </Box>
      </TabContext>
    </div>
  );
}

export default Page;
