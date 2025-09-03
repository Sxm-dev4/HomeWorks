import React from 'react';

const Child = ({ categories }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <h3>Lista de Categorías:</h3>
      {/* Renderizado condicional */}
      {categories.length === 0 ? (
        <p style={{ color: '#666', fontStyle: 'italic' }}>
          No hay categorías agregadas
        </p>
      ) : (
        <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
          {categories.map((cat, index) => (
            <li key={index} style={{ margin: '5px 0' }}>{cat}</li>
          ))}
        </ul>
      )}
      {/* Este es un comentario dentro del renderizado */}
    </div>
  );
};

export default Child;