import React, { useState } from 'react';
import { BinaryTree } from './classes/BynartTree';
import { initialNumbers } from './data/dataInicial';
import { TraversalDisplay } from './components/TraversalDisplay';
import { SearchPanel } from './components/SearchPanel';
import { InsertPanel } from './components/InsertPanel';
import { TreeVisualization } from './components/TreeVisualization';

export default function App() {
  const [tree] = useState(() => {
    const newTree = new BinaryTree();
    
    initialNumbers.forEach(num => newTree.insert(num));
    
    console.log('=== RECORRIDOS DEL ÁRBOL ===');
    console.log('InOrder (L-N-R):', newTree.inOrder());
    console.log('PreOrder (N-L-R):', newTree.preOrder());
    console.log('PostOrder (L-R-N):', newTree.postOrder());
    
    return newTree;
  });

  const [treeData, setTreeData] = useState(tree.toD3Format());

  const handleTreeUpdate = () => {
    setTreeData(tree.toD3Format());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Challenge 14 
        </h1>
        <p className="text-center text-gray-400 mb-8">
          Visualización y Operaciones con Árboles Binarios
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <TraversalDisplay tree={tree} />
          <SearchPanel tree={tree} />
          <InsertPanel tree={tree} onInsert={handleTreeUpdate} />
        </div>

        <TreeVisualization treeData={treeData} />
      </div>
    </div>
  );
}