import React from 'react';

export const CustomNodeLabel = ({ nodeData }) => (
  <div style={{ textAlign: 'center' }}>
    <text
      style={{
        fill: 'white',
        fontSize: '14px',
        fontWeight: 'bold'
      }}
    >
      {nodeData.name}
    </text>
  </div>
);