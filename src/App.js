import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { ContentArea } from './components/ContentArea';
import { TraversalPanel } from './components/TraversalPanel';
import { buildTreeFromData } from './utils/treeBuilder';
import { menuData } from './data/menuData';
import './styles/styles.css';


export default function App() {
  const [tree] = useState(() => buildTreeFromData(menuData));
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [showTraversal, setShowTraversal] = useState(false);

    useEffect(() => {
      console.log('=== Menú de Árbol N-ario Creado ===');
      tree.printDFS();
      tree.printBFS();
    }, [tree]);

    const handleMenuSelect = (menuItem) => {
      setSelectedMenu(menuItem);
      console.log('Selected:', menuItem);
    };

    return (
      <div className="app-container">
        <Sidebar
          tree={tree}
          onMenuSelect={handleMenuSelect}
          selectedLink={selectedMenu?.link}
        />
        
        <div className="content-container">
          <div className="content-header">
            <h1>Challenge 15 - Menú de Árbol N-ario</h1>
            <button onClick={() => setShowTraversal(!showTraversal)}>
              {showTraversal ? 'Ocultar' : 'Mostrar'} Recorridos
            </button>
          </div>

          <div className="content-body">
            {showTraversal && <TraversalPanel tree={tree} />}
            <ContentArea selectedMenu={selectedMenu} />
          </div>
        </div>
      </div>
    );
  }