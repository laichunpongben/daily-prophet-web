// App.js
import React from 'react';
import { AuthProvider } from './components/AuthContext';
import { ViewProvider } from './components/ViewContext';
import Page from './components/Page';
import './styles/App.css';

function App() {
  return (
    <AuthProvider>
      <ViewProvider>
        <Page />
      </ViewProvider>
    </AuthProvider>
  );
}

export default App;
