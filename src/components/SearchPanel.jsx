import React, { useState } from 'react';

export const SearchPanel = ({ tree }) => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = () => {
    const value = parseInt(searchValue);
    if (!isNaN(value)) {
      const found = tree.search(value);
      setSearchResult({ value, found });
      console.log(`Búsqueda de ${value}: ${found ? 'Encontrado' : 'No encontrado'}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
      <h2 className="text-xl font-semibold mb-4 text-blue-400">Buscar Valor</h2>
      <div className="flex gap-2 mb-3">
        <input
          type="number"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ingresa un número"
          className="flex-1 px-3 py-2 bg-slate-700 rounded border border-slate-600 focus:border-blue-500 focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded font-semibold transition"
        >
          Buscar
        </button>
      </div>
      {searchResult && (
        <div className={`p-3 rounded ${searchResult.found ? 'bg-green-900/30 border border-green-700' : 'bg-red-900/30 border border-red-700'}`}>
          <p className="font-semibold">
            {searchResult.found 
              ? `✓ ${searchResult.value} está en el árbol` 
              : `✗ ${searchResult.value} no está en el árbol`}
          </p>
        </div>
      )}
    </div>
  );
};