// ViewContext.js
import React, { createContext, useContext, useState } from 'react';

const ViewContext = createContext();

export const ViewProvider = ({ children }) => {
  const [view, setView] = useState('login');

  const handleViewChange = (newView) => {
    setView(newView);
  };

  return (
    <ViewContext.Provider value={{ view, handleViewChange }}>
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
