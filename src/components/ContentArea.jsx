import React from 'react';

export const ContentArea = ({ selectedMenu }) => {
  if (!selectedMenu) {
    return (
      <div className="empty-state">
        <div className="empty-state-content">
          <h2>Selecciona un elemento del menú</h2>
          <p>Elige una opción de la barra</p>
        </div>
      </div>
    );
  }

  return (
    <div className="content-wrapper">
      <h1 className="content-main-title">{selectedMenu.title}</h1>

      <div className="content-card">
        <div className="content-detail">
          <p className="content-label">Ruta:</p>
          <p className="content-value">{selectedMenu.link}</p>
        </div>
        
        <div className="content-detail">
          <p className="content-label">Componente:</p>
          <p className="content-value">{selectedMenu.component}</p>
        </div>
      </div>

      <div className="content-card">
        <h3 className="content-info-title">Informacion</h3>
        <ul className="content-info-list">
          <li>• Construido con estructura de datos de Árbol N-ario</li>
          <li>•  Cada nodo puede tener varios hijos (de 0 a N)</li>
          <li>• Permite anidación de niveles ilimitados</li>
        </ul>
      </div>
    </div>
  );
};
