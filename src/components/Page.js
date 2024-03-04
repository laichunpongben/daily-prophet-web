// Page.js
import React, { useEffect } from 'react';
import Header from './Header';
import LoginView from './LoginView';
import FeedView from './FeedView';
import SettingView from './SettingView';
import { useAuth } from './context/AuthContext';
import { useView } from './context/ViewContext';
import CssBaseline from '@mui/material/CssBaseline';
import { useColorScheme } from '@mui/material-next/styles';
import './styles/Page.css';

function Page() {
  const { token, userId, userEmail, userName, setToken, setUserId, setUserEmail, setUserName } = useAuth();
  const { view, handleViewChange } = useView();
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

      handleViewChange('feed');
    }
  }, [token, userId, userEmail, userName, setToken, setUserId, setUserEmail, setUserName, handleViewChange]);

  useEffect(() => {
    const storedMode = localStorage.getItem('mode');

    if (storedMode !== null && storedMode !== mode) {
      setMode(storedMode);
    }
  }, []);

  return (
    <div className={`wrapper`}>
      <CssBaseline />
      <div>
        <Header />
      </div>
      <div>
        {view === 'login' && <LoginView />}
        {view === 'feed' && <FeedView />}
        {view === 'setting' && <SettingView />}
      </div>
    </div>
  );
}

export default Page;
