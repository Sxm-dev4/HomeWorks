import React, { useState, useEffect } from 'react';
import { BinaryTree } from './classes/BinaryTree';
import { initialNumbers } from './data/dataInicial';
import { TraversalDisplay } from './components/TraversalDisplay';
import { SearchPanel } from './components/SearchPanel';
import { InsertPanel } from './components/InsertPanel';
import { TreeVisualization } from './components/TreeVisualization';
import { StoragePanel } from './components/StoragePanel';
import './styles/App.module.scss';

export default function App() {
  const [tree, setTree] = useState(null);
  const [treeData, setTreeData] = useState(null);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('appTheme');
    if (savedTheme) {
      setTheme(savedTheme);
    }

    const savedTreeData = localStorage.getItem('binaryTreeData');
    let newTree;

    if (savedTreeData) {
      const parsedData = JSON.parse(savedTreeData);
      newTree = new BinaryTree();
      parsedData.forEach(num => newTree.insert(num));
      console.log('=== ÁRBOL CARGADO DESDE LOCAL STORAGE ===');
    } else {
      newTree = new BinaryTree();
      initialNumbers.forEach(num => newTree.insert(num));
      console.log('=== ÁRBOL INICIAL CREADO ===');
    }

    console.log('InOrder (L-N-R):', newTree.inOrder());
    console.log('PreOrder (N-L-R):', newTree.preOrder());
    console.log('PostOrder (L-R-N):', newTree.postOrder());

    setTree(newTree);
    setTreeData(newTree.toD3Format());
  }, []);

  const saveTreeToStorage = (updatedTree) => {
    const treeArray = updatedTree.inOrder();
    localStorage.setItem('binaryTreeData', JSON.stringify(treeArray));
    console.log('Árbol guardado en localStorage');
  };

  const handleTreeUpdate = () => {
    setTreeData(tree.toD3Format());
    saveTreeToStorage(tree);
  };

  const handleClearTree = () => {
    const newTree = new BinaryTree();
    setTree(newTree);
    setTreeData(null);
    localStorage.removeItem('binaryTreeData');
    console.log('Árbol limpiado');
  };

  const handleResetTree = () => {
    const newTree = new BinaryTree();
    initialNumbers.forEach(num => newTree.insert(num));
    setTree(newTree);
    setTreeData(newTree.toD3Format());
    saveTreeToStorage(newTree);
    console.log('Árbol reiniciado con datos iniciales');
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('appTheme', newTheme);
  };

  if (!tree) {
    return <div className="loading">Cargando...</div>;
  }

  return (
    <div className={`app-container theme-${theme}`}>
      <div className="max-w-7xl mx-auto">
        <header className="app-header">
          <h1 className="app-title">
            Challenge 17 - Binary Tree
          </h1>
          <p className="app-subtitle">
            Visualización y Operaciones con Árboles Binarios + Local Storage + SASS
          </p>
        </header>

        <div className="controls-grid">
          <TraversalDisplay tree={tree} />
          <SearchPanel tree={tree} />
          <InsertPanel tree={tree} onInsert={handleTreeUpdate} />
          <StoragePanel 
            onClear={handleClearTree}
            onReset={handleResetTree}
            theme={theme}
            onThemeChange={handleThemeChange}
          />
        </div>

        <TreeVisualization treeData={treeData} />
      </div>
    </div>
  );
}