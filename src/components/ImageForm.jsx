import React, { useState } from 'react';

const ImageForm = ({ onAddImage }) => {
  const [title, setTitle] = useState('');
  const [imageId, setImageId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim()) {
      alert('El titulo no puede estar vacio');
      return;
    }
    
    if (!imageId || isNaN(imageId) || parseInt(imageId) < 1) {
      alert('El ID debe ser un numero positivo');
      return;
    }

    const newImage = {
      id: parseInt(imageId),
      title: title.trim(),
      url: `https://picsum.photos/id/${imageId}/200/300`
    };

    // Llamar función del padre
    onAddImage(newImage);

    // Limpiar formulario
    setTitle('');
    setImageId('');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Agregar Nueva Imagen
      </h2>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título de la imagen"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        
        <input
          type="number"
          value={imageId}
          onChange={(e) => setImageId(e.target.value)}
          placeholder="ID (número)"
          min="1"
          className="w-full sm:w-32 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        
        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Agregar Imagen
        </button>
      </div>
    </div>
  );
};

export default ImageForm;
