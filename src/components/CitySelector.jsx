import React from 'react';
import { CityDropdown } from './CityDropdown';
import { PeopleList } from './PeopleList';

export const CitySelector = ({ cities, selectedCity, onCityChange, peopleList }) => {
  return (
    <div style={{ 
      background: '#f8f9fa', 
      padding: '20px', 
      borderRadius: '10px',
      marginBottom: '20px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ marginTop: 0, color: '#34495e' }}>
        Personas por Ciudad
      </h2>
      
      <CityDropdown 
        cities={cities}
        selectedCity={selectedCity}
        onCityChange={onCityChange}
      />

      <PeopleList 
        city={selectedCity}
        peopleList={peopleList}
      />
    </div>
  );
};