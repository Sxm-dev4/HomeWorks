import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);

  const handleInputChange = (event) => {
    setCategory(event.target.value);
  };

  const addCategory = () => {
    if (category.trim() !== '') {
      setCategories([...categories, category]);
      setCategory('');
    }
  };

  return (
    <div style={{ padding: '20px', border: '2px solid #007bff', margin: '20px' }}>
      <h2>Challenge 04 - Gestión de Categorías</h2>
      
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          value={category}
          onChange={handleInputChange}
          placeholder="Escribe una categoría..."
          style={{ padding: '8px', marginRight: '10px' }}
        />
        <button onClick={addCategory} style={{ padding: '8px 16px' }}>
          Agregar Categoría
        </button>
      </div>

      <Child categories={categories} />
    </div>
  );
};

export default Parent;