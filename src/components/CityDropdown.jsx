import React from 'react';

export const CityDropdown = ({ cities, selectedCity, onCityChange }) => {
  return (
    <div style={{ marginBottom: '15px' }}>
      <label style={{ marginRight: '10px', fontWeight: 'bold' }}>
        Seleccionar Ciudad:
      </label>
      <select 
        value={selectedCity}
        onChange={(e) => onCityChange(e.target.value)}
        style={{
          padding: '8px 15px',
          borderRadius: '5px',
          border: '2px solid #4ecdc4',
          fontSize: '14px',
          cursor: 'pointer'
        }}
      >
        {cities.map(city => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
    </div>
  );
};