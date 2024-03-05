// App.js
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { CssVarsProvider } from '@mui/material-next/styles';
import { AuthProvider } from './components/context/AuthContext';
import { ViewProvider } from './components/context/ViewContext';
import Page from './components/Page';
import { theme } from './components/Theme';
import './styles/App.css';

function App() {
  return (
    <HelmetProvider>
      <CssVarsProvider theme={theme}>
        <AuthProvider>
          <ViewProvider>
            <Page />
          </ViewProvider>
        </AuthProvider>
      </CssVarsProvider>
    </HelmetProvider>
  );
}

export default App;
