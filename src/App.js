import React, { useState } from 'react';
import FeedView from './components/FeedView';
import SettingView from './components/SettingView';
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
    <div className="wrapper">
      <section className="buttons-section">
        <button className="header-button" onClick={handleFeedButtonClick}>Feed</button>
        <div className="button-space"></div>
        <button className="header-button" onClick={handleSettingButtonClick}>Setting</button>
      </section>

      {view === 'feed' && <FeedView />}
      {view === 'setting' && <SettingView />}
    </div>
  );
}

export default App;
