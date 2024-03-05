// ViewContext.js
import React, { createContext, useContext, useState } from 'react';

const ViewContext = createContext();

export const ViewProvider = ({ children }) => {
  const [view, setView] = useState('login');
  const [playVideoOffScreen, setPlayVideoOffScreen] = useState(false);

  return (
    <ViewContext.Provider value={{ view, setView, playVideoOffScreen, setPlayVideoOffScreen }}>
      {children}
    </ViewContext.Provider>
  );
};

export const useView = () => {
  const context = useContext(ViewContext);
  if (!context) {
    throw new Error('useView must be used within a ViewProvider');
  }
  return context;
};
