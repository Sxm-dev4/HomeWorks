import React from 'react';

export const TraversalDisplay = ({ tree }) => {
  return (
    <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
      <h2 className="text-xl font-semibold mb-4 text-blue-400">Recorridos</h2>
      <div className="space-y-3 text-sm">
        <div>
          <span className="font-semibold text-green-400">InOrder (L-N-R):</span>
          <p className="text-gray-300 mt-1">{tree.inOrder().join(', ')}</p>
        </div>
        <div>
          <span className="font-semibold text-yellow-400">PreOrder (N-L-R):</span>
          <p className="text-gray-300 mt-1">{tree.preOrder().join(', ')}</p>
        </div>
        <div>
          <span className="font-semibold text-purple-400">PostOrder (L-R-N):</span>
          <p className="text-gray-300 mt-1">{tree.postOrder().join(', ')}</p>
        </div>
      </div>
    </div>
  );
};
