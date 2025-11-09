import React from 'react';

const LegendItem = ({ color, label, shape = 'circle' }) => (
  <>
    <span style={{ 
      display: 'inline-block', 
      width: '15px', 
      height: '15px', 
      background: color,
      borderRadius: shape === 'circle' ? '50%' : '0',
      marginRight: '5px',
      verticalAlign: 'middle'
    }}></span>
    {label}
  </>
);

export const Legend = () => {
  return (
    <div style={{ 
      marginTop: '15px', 
      textAlign: 'center',
      fontSize: '14px',
      color: '#7f8c8d'
    }}>
      <LegendItem color="#4ecdc4" label="Personas" shape="circle" />
      <span style={{ marginLeft: '20px' }}>
        <LegendItem color="#ff6b6b" label="Ciudades" shape="square" />
      </span>
    </div>
  );
};