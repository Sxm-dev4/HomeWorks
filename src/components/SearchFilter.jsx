import React from 'react';

const SearchFilter = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Filtrar Imagen por Título
      </h2>
      
      <div className="flex">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Escribe el título para filtrar..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
        <div className="px-4 py-2 bg-green-500 text-white rounded-r-md flex items-center">
          Buscar
        </div>
      </div>
      
      {searchTerm && (
        <p className="text-sm text-gray-600 mt-2">
          Filtrando por: "<strong>{searchTerm}</strong>"
        </p>
      )}
    </div>
  );
};

export default SearchFilter;