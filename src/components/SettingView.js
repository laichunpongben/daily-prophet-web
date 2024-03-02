import React, { useState, useEffect, useContext } from 'react';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from './AuthContext';
import './styles/SettingView.css';

const SettingView = () => {
  const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8000';
  const { token, userName } = useContext(AuthContext);

  const [setting, setSetting] = useState([]);
  const [weights, setWeights] = useState([]);
  const [values, setValues] = useState([]);
  const [types, setTypes] = useState([]);

  const typeOptions = [
    { value: 'reddit', label: 'Reddit' },
    { value: 'arxiv', label: 'Arxiv' },
    { value: 'youtube', label: 'Youtube' },
    { value: 'openweathermap', label: 'OpenWeatherMap' },
  ];

  useEffect(() => {
    const fetchSetting = async () => {
      try {
        const response = await fetch(`${apiUrl}/portfolio`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        console.log('Portfolio Data:', data);
        setSetting(data.setting);
        setWeights(data.setting.map((s) => Math.max(0, s[2])));
        setValues(data.setting.map((s) => s[1]));
        setTypes(data.setting.map((s) => s[0]));
      } catch (error) {
        console.error('Error fetching portfolio:', error.message);
      }
    };

    fetchSetting();
  }, [apiUrl, token]);

  const handleResetButtonClick = async () => {
    try {
      const response = await fetch(`${apiUrl}/portfolio/reset`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log('Reset Portfolio Data:', data);
      setWeights(data.setting.map((s) => Math.max(0, s[2])));
      setValues(data.setting.map((s) => s[1]));
      setTypes(data.setting.map((s) => s[0]));
      // Handle the response or update the state as needed
    } catch (error) {
      console.error('Error resetting portfolio:', error.message);
    }
  };

  const handleSaveButtonClick = async () => {
    try {
      const payload = {
        setting: types.map((type, index) => [type, values[index], parseFloat(weights[index]) || 0]),
      };

      const response = await fetch(`${apiUrl}/portfolio`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log('Save Portfolio Data:', data);
      // Handle the response or update the state as needed
    } catch (error) {
      console.error('Error saving portfolio:', error.message);
    }
  };

  const handleTypeChange = (index, selectedOption) => {
    const newTypes = [...types];
    newTypes[index] = selectedOption.value;
    setTypes(newTypes);
  };

  const handleValueChange = (index, newValue) => {
    const newValues = [...values];
    newValues[index] = newValue;
    setValues(newValues);
  };

  const handleWeightChange = (index, newValue) => {
    const newWeights = weights.map((w, i) => (i === index ? Math.max(0, parseFloat(newValue)) : w));

    // Ensure that the sum of weights is greater than 0
    if (newWeights.reduce((sum, w) => sum + w, 0) === 0) {
      alert("The sum of weights must be greater than 0");
      return;
    }

    setWeights(newWeights);
  };

  const handleRemoveRow = (index) => {
    // Ensure that there is at least one row remaining
    if (types.length === 1) {
      alert("You must keep at least one row.");
      return;
    }

    // Create new arrays without the element at the specified index
    const newTypes = [...types.slice(0, index), ...types.slice(index + 1)];
    const newValues = [...values.slice(0, index), ...values.slice(index + 1)];
    const newWeights = [...weights.slice(0, index), ...weights.slice(index + 1)];

    // Update state with the new arrays
    setTypes(newTypes);
    setValues(newValues);
    setWeights(newWeights);

    // Update setting state
    setSetting(newTypes.map((type, i) => [type, newValues[i], newWeights[i]]));
  };

  const handleAddRow = () => {
    setTypes([...types, typeOptions[0].value]); // Add a new row with the default type
    setValues([...values, '']); // Add a new row with an empty value
    setWeights([...weights, 0]); // Add a new row with weight 0
  };

  return (
    <div className="setting-container">
      <div className="welcome-message">
        {userName && <p>Welcome back, {userName}!</p>}
      </div>
      <div className="intro-message">
        <p>Daily Prophet - You are what you read. You control your daily feed.</p>
      </div>
      <div className="portfolio-card">
        {setting ? (
          <>
            <table>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Value</th>
                  <th>Weight</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {types.map((type, index) => (
                  <tr key={index}>
                    <td>
                      <Select
                        className="type-select"
                        value={{ value: types[index], label: types[index] }}
                        options={typeOptions}
                        onChange={(selectedOption) => handleTypeChange(index, selectedOption)}
                      />
                    </td>
                    <td>
                      <input
                        className="value-input"
                        type="text"
                        value={values[index]}
                        onChange={(e) => handleValueChange(index, e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        className="weight-input"
                        type="number"
                        step="0.01"
                        value={weights[index]}
                        onChange={(e) => handleWeightChange(index, e.target.value)}
                      />
                    </td>
                    <td className="remove-button-column">
                      <button className="remove-button" onClick={() => handleRemoveRow(index)}>
                        <FontAwesomeIcon icon={faTimes} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </>
        ) : (
          <p>No settings available</p>
        )}
      </div>
      {setting && (
        <div className="portfolio-button-container">
          <button className="portfolio-button" onClick={handleAddRow}>
           <FontAwesomeIcon icon={faPlus} /> Add Row
          </button>
          <div className="button-space"></div>
          <button className="portfolio-button" onClick={handleSaveButtonClick}>Save</button>
          <div className="button-space"></div>
          <button className="portfolio-button" onClick={handleResetButtonClick}>Reset</button>
        </div>
      )}
    </div>
  );
};

export default SettingView;
