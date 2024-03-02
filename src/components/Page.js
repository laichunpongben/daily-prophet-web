// Page.js
import React from 'react';
import Header from './Header';
import LoginView from './LoginView';
import FeedView from './FeedView';
import SettingView from './SettingView';
import { useView } from './ViewContext';

function Page() {
  const { view } = useView();

  return (
    <div className="wrapper">
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
