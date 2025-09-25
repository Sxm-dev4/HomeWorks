import React, { useState } from 'react';

const BookForm = ({ onAddBook }) => {
  const [formData, setFormData] = useState({
    name: '',
    isbn: '',
    author: '',
    editorial: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.isbn || !formData.author || !formData.editorial) {
      alert('Por favor, completa todos los campos');
      return;
    }

    onAddBook({ ...formData });
    
    setFormData({
      name: '',
      isbn: '',
      author: '',
      editorial: ''
    });
  };

  return (
    <div className="book-form">
      <h2>Agregar Nuevo Libro</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre del Libro:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ej: Los miserables"
          />
        </div>

        <div className="form-group">
          <label htmlFor="isbn">ISBN:</label>
          <input
            type="text"
            id="isbn"
            name="isbn"
            value={formData.isbn}
            onChange={handleChange}
            placeholder="Ej: 978-84-376-0489-3 "
          />
        </div>

        <div className="form-group">
          <label htmlFor="author">Autor:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Ej: Victor Hugo"
          />
        </div>

        <div className="form-group">
          <label htmlFor="editorial">Editorial:</label>
          <input
            type="text"
            id="editorial"
            name="editorial"
            value={formData.editorial}
            onChange={handleChange}
            placeholder="Ej: Ediciones Akal"
          />
        </div>

        <button type="submit" className="add-btn">
          Agregar Libro (Push)
        </button>
      </form>
    </div>
  );
};

export default BookForm;