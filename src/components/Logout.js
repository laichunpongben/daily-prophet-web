// Logout.js
import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { useView } from './ViewContext';

const Logout = () => {
  const { setToken, setUserId, setUserEmail, setUserName } = useContext(AuthContext);
  const { handleViewChange } = useView();

  const handleLogout = () => {
    // Perform logout actions, clear user data, and navigate to login or another view
    setToken(null);
    setUserId(null);
    setUserEmail(null);
    setUserName(null);

    handleViewChange('login'); // Redirect to login view after logout
  };

  return (
    <button className="logout-button" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;
