import React, { useState } from 'react';

const PersonForm = ({ onAddPerson }) => {
  const [formData, setFormData] = useState({ name: '', withdrawalAmount: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'withdrawalAmount' ? Number(value) : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      alert('Por favor ingresa el nombre');
      return;
    }
    
    if (!formData.withdrawalAmount || formData.withdrawalAmount <= 0) {
      alert('Por favor ingresa un monto válido');
      return;
    }

    if (formData.withdrawalAmount > 2000000) {
      alert('El monto máximo es $2,000,000');
      return;
    }

    const newPerson = {
      name: formData.name.trim(),
      withdrawalAmount: Number(formData.withdrawalAmount),
      arrivalTime: new Date() 
    };

    onAddPerson(newPerson);

    setFormData({ name: '', withdrawalAmount: '' });
  };

  const formatCurrency = (amount) => {
    if (!amount) return '';
    return `$${Number(amount).toLocaleString('es-CO')}`;
  };

  return (
    <div className="person-form">
      <h2>Unirse a la Cola</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Nombre Completo:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Ej: Samuel García"
            maxLength={50}
            required
          />
        </div>
        
        <div className="input-group">
          <label>Monto de Retiro:</label>
          <input
            type="number"
            name="withdrawalAmount"
            value={formData.withdrawalAmount}
            onChange={handleInputChange}
            placeholder="Ej: 150000"
            min="10000"
            max="2000000"
            step="10000"
            required
          />
          {formData.withdrawalAmount && (
            <small className="currency-preview">
              {formatCurrency(formData.withdrawalAmount)}
            </small>
          )}
        </div>
        
        <button type="submit" className="enqueue-btn">
          Agregar a Cola
        </button>
      </form>
    </div>
  );
};

export default PersonForm;