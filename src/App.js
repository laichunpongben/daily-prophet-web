import React, { useState } from 'react';
import Card from './Card';
import './App.css';

function App() {
  const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8000';
  console.log(`Environment: ${process.env.REACT_APP_API_URL ? 'Production' : 'Development'}`);

  const [count] = useState(100);
  const [responseData, setResponseData] = useState(null);

  const handleNewButtonClick = async () => {
    try {
      const response = await fetch(`${apiUrl}/new/${count}`);
      const data = await response.json();
      console.log('New Feeds Data:', data);
      if (data && data.type) {
        setResponseData(data);
      }
    } catch (error) {
      console.error('Error fetching new feeds:', error.message);
    }
  };

  const handlePopButtonClick = async () => {
    try {
      const response = await fetch(`${apiUrl}/pop`);
      const data = await response.json();
      console.log('Popped Feeds Data:', data);
      if (data && data.type) {
        setResponseData(data);
      }
    } catch (error) {
      console.error('Error fetching popped feeds:', error.message);
    }
  };

  const handlePortfolioButtonClick = async () => {
    try {
      const response = await fetch(`${apiUrl}/portfolio`);
      const data = await response.json();
      console.log('Portfolio Data:', data);
      if (data && data.type) {
        setResponseData(data);
      }
    } catch (error) {
      console.error('Error fetching portfolio:', error.message);
    }
  };

  const handleResetButtonClick = async () => {
    try {
      const response = await fetch(`${apiUrl}/reset`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log('Reset Feeds Data:', data);
      // Handle the response or update the state as needed
    } catch (error) {
      console.error('Error resetting feeds:', error.message);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Daily Prophet</h1>
        <p>Your source for daily feeds</p>
      </header>

      <section className="buttons-section">
        <button onClick={handleNewButtonClick}>Fetch New Feeds</button>
        <div className="button-space"></div>
        <button onClick={handlePopButtonClick}>Next Feed</button>
        <div className="button-space"></div>
        <button onClick={handleResetButtonClick}>Clear All Feeds</button>
        <div className="button-space"></div>
        <button onClick={handlePortfolioButtonClick}>Settings</button>
      </section>

      {/* Display Card if responseData has type */}
      {responseData && (
        <div className="card">
          <Card data={responseData} />
        </div>
      )}
    </div>
  );
}

export default App;
