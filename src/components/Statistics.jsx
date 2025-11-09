import React from 'react';
import { StatCard } from './StatCard';

export const Statistics = ({ graph }) => {
  const stats = {
    totalNodes: graph.nodes.length,
    totalPeople: graph.nodes.filter(n => n.type === 'person').length,
    totalCities: graph.nodes.filter(n => n.type === 'city').length,
    totalConnections: graph.edges.length
  };

  return (
    <div style={{
      marginTop: '20px',
      background: '#fff3cd',
      padding: '15px',
      borderRadius: '8px',
      border: '1px solid #ffc107'
    }}>
      <h3 style={{ marginTop: 0 }}>Estadísticas del Grafo</h3>
      <ul style={{ margin: 0 }}>
        <StatCard label="Total de nodos" value={stats.totalNodes} />
        <StatCard label="Personas" value={stats.totalPeople} />
        <StatCard label="Ciudades" value={stats.totalCities} />
        <StatCard label="Conexiones" value={stats.totalConnections} />
      </ul>
    </div>
  );
};