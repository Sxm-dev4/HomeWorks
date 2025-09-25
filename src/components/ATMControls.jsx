import React from 'react';

const ATMControls = ({ 
  currentlyServing, 
  onServeNext, 
  onFinishService, 
  queueEmpty 
}) => {
  const formatCurrency = (amount) => {
    return `$${amount.toLocaleString('es-CO')}`;
  };

  return (
    <div className="atm-controls">
      <h2>Estado del ATM</h2>
      
      <div className="atm-screen">
        {currentlyServing ? (
          <div className="serving-customer">
            <h3>Atendiendo Cliente</h3>
            <div className="customer-details">
              <p className="customer-name">
                <strong>{currentlyServing.name}</strong>
              </p>
              <p className="withdrawal-amount">
                Retirando: {formatCurrency(currentlyServing.withdrawalAmount)}
              </p>
            </div>
            <button 
              onClick={onFinishService} 
              className="finish-btn"
            >
              Finalizar Transacción
            </button>
          </div>
        ) : (
          <div className="atm-available">
            <h3>ATM Disponible</h3>
            <p>Listo para atender al siguiente cliente</p>
          </div>
        )}
      </div>

      <div className="atm-actions">
        <button 
          onClick={onServeNext}
          disabled={queueEmpty || currentlyServing}
          className="serve-btn"
        >
          {currentlyServing 
            ? 'Atendiendo...' 
            : queueEmpty 
            ? 'Cola Vacía' 
            : ' Atender Siguiente (Dequeue)'
          }
        </button>
      </div>
    </div>
  );
};

export default ATMControls;