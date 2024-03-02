// App.js
import React, { useState } from 'react';
import FeedView from './components/FeedView';
import SettingView from './components/SettingView';
import Login from './components/Login';
import { TokenProvider } from './TokenContext';
import './styles/App.css';

function App() {
  const [view, setView] = useState('feed');

  const handleFeedButtonClick = () => {
    setView('feed');
    console.log('Current View: Feed');
  };

  const handleSettingButtonClick = () => {
    setView('setting');
    console.log('Current View: Setting');
  };

  return (
    <TokenProvider> {/* Wrap your components with TokenProvider */}
      <div className="wrapper">
        <section className="buttons-section">
          <button className="header-button" onClick={handleFeedButtonClick}>
            Feed
          </button>
          <div className="button-space"></div>
          <button className="header-button" onClick={handleSettingButtonClick}>
            Setting
          </button>
          <div className="button-space"></div>
          <Login />
        </section>

        {view === 'feed' && <FeedView />}
        {view === 'setting' && <SettingView />}
        {view === 'login' && <Login />}
      </div>
    </TokenProvider>
  );
}

export default App;
