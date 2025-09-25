import React from 'react';

const QueueDisplay = ({ people }) => {
  const formatCurrency = (amount) => {
    return `${amount.toLocaleString('es-CO')}`;
  };

  const formatArrivalTime = (arrivalTime) => {
    const arrival = new Date(arrivalTime);
    return arrival.toLocaleTimeString('es-CO', { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const getWaitTime = (position) => {
    const minutesPerPerson = 3;
    const totalMinutes = (position - 1) * minutesPerPerson;
    
    if (totalMinutes === 0) return 'Siguiente en ser atendido';
    if (totalMinutes < 60) return `~${totalMinutes} minutos`;
    
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `~${hours}h ${minutes}m de espera`;
  };

  return (
    <div className="queue-display">
      <div className="queue-header">
        <h2>Cola del ATM</h2>
        <span className="queue-count">{people.length} personas esperando</span>
      </div>
      
      <div className="fifo-info">
        <p>Primero en llegar, primero en ser atendido</p>
      </div>
      
      {people.length === 0 ? (
        <div className="empty-queue">
          <div className="empty-icon"></div>
          <h3>¡Cola Vacía!</h3>
          <p>No hay personas esperando en este momento</p>
        </div>
      ) : (
        <div className="people-list">
          {people.map((person, index) => (
            <div 
              key={`${person.name}-${index}`}
              className={`person-card ${index === 0 ? 'next-person' : ''}`}
            >
              <div className="person-position">
                <span className="position-number">#{index + 1}</span>
                {index === 0 && (
                  <span className="next-badge">SIGUIENTE</span>
                )}
              </div>
              
              <div className="person-info">
                <h4 className="person-name">{person.name}</h4>
                <p className="withdrawal-info">
                  {formatCurrency(person.withdrawalAmount)}
                </p>
                <p className="arrival-time">
                  Llegó: {formatArrivalTime(person.arrivalTime)}
                </p>
                <p className="wait-info">
                  {getWaitTime(index + 1)}
                </p>
              </div>

              <div className="position-indicator">
                <div className="progress-ring">
                  <span>{index + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QueueDisplay;