import React, { useState } from 'react';

export const TraversalPanel = ({ tree }) => {
  const [dfsResult, setDfsResult] = useState([]);
  const [bfsResult, setBfsResult] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const runTraversals = () => {
    const dfsItems = [];
    const bfsItems = [];

    tree.dfs((node, level) => {
      dfsItems.push({ title: node.value.title, level });
    });

    tree.bfs((node, level) => {
      bfsItems.push({ title: node.value.title, level });
    });

    setDfsResult(dfsItems);
    setBfsResult(bfsItems);
    setShowResults(true);

    tree.printDFS();
    tree.printBFS();
  };

  return (
    <div className="traversal-panel">
      <h2>Métodos de Recorrido de Árbol</h2>
      
      <button onClick={runTraversals} className="traversal-button">
         Ejecutar DFS y BFS
      </button>

      {showResults && (
        <div className="traversal-results">
          <div className="traversal-column dfs">
            <h3>DFS (Búsqueda en Profundidad)</h3>
            <div className="traversal-list">
              {dfsResult.map((item, index) => (
                <div
                  key={index}
                  className="traversal-item"
                  style={{ paddingLeft: `${item.level * 16 + 8}px` }}
                >
                  {item.title}
                </div>
              ))}
            </div>
          </div>

          <div className="traversal-column bfs">
            <h3>BFS (Búsqueda en Amplitud)</h3>
            <div className="traversal-list">
              {bfsResult.map((item, index) => (
                <div
                  key={index}
                  className="traversal-item"
                  style={{ paddingLeft: `${item.level * 16 + 8}px` }}
                >
                  {item.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};