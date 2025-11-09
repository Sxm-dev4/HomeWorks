import React, { useState } from 'react';

export const InsertPanel = ({ tree, onInsert }) => {
  const [newValue, setNewValue] = useState('');

  const handleInsert = () => {
    const value = parseInt(newValue);
    if (!isNaN(value)) {
      tree.insert(value);
      setNewValue('');
      onInsert();
      
      console.log('=== ÁRBOL ACTUALIZADO ===');
      console.log('InOrder:', tree.inOrder());
      console.log('PreOrder:', tree.preOrder());
      console.log('PostOrder:', tree.postOrder());
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleInsert();
    }
  };

  return (
    <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
      <h2 className="text-xl font-semibold mb-4 text-blue-400">Insertar Valor</h2>
      <div className="flex gap-2">
        <input
          type="number"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Nuevo número"
          className="flex-1 px-3 py-2 bg-slate-700 rounded border border-slate-600 focus:border-purple-500 focus:outline-none"
        />
        <button
          onClick={handleInsert}
          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded font-semibold transition"
        >
          Insertar
        </button>
      </div>
      <p className="text-xs text-gray-400 mt-2">
        Los recorridos se actualizan en la consola
      </p>
    </div>
  );
};