// TokenContext.js
import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userName, setUserName] = useState(null);

  return (
    <AuthContext.Provider value={{ token, setToken, userId, setUserId, userEmail, setUserEmail, userName, setUserName }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useToken = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useToken must be used within a AuthProvider');
  }
  return context;
};
