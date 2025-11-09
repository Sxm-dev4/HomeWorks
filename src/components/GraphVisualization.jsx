import React from 'react';
import { GraphCanvas } from './GraphCanvas';
import { Legend } from './Legend';

export const GraphVisualization = ({ graphData }) => {
  return (
    <div style={{
      background: 'white',
      padding: '200px',
      borderRadius: '100px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <div>
        <h2 style={{ textAlign: 'center', color: '#34495e' }}>
          Visualización del Grafo
        </h2>
        <GraphCanvas graphData={graphData} />
        <Legend />
      </div>
    </div>
  );
};