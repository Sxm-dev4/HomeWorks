import React from 'react';

export const PeopleList = ({ city, peopleList }) => {
  return (
    <div style={{
      background: 'white',
      padding: '15px',
      borderRadius: '8px',
      border: '2px solid #4ecdc4'
    }}>
      <h3 style={{ marginTop: 0, color: '#ff6b6b' }}>
        Personas en {city}:
      </h3>
      <p style={{ fontSize: '16px', margin: 0 }}>
        {peopleList || 'No hay personas en esta ciudad'}
      </p>
    </div>
  );
};