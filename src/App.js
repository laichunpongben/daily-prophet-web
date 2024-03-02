// App.js
import React from 'react';
import { AuthProvider } from './components/AuthContext';
import { ThemeProvider } from './components/ThemeContext';
import { ViewProvider } from './components/ViewContext';
import Page from './components/Page';
import './styles/App.css';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <ViewProvider>
          <Page />
        </ViewProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
