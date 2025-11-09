import React from 'react';
import Tree from 'react-d3-tree';
import { CustomNodeLabel } from './CustomNodeLabel';

export const TreeVisualization = ({ treeData }) => {
  const nodeSize = { x: 200, y: 100 };
  const translate = { x: 400, y: 50 };

  return (
    <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
      <h2 className="text-xl font-semibold mb-4 text-blue-400">Visualización del Árbol</h2>
      <div className="bg-white rounded-lg" style={{ height: '500px' }}>
        {treeData && (
          <Tree
            data={treeData}
            orientation="vertical"
            translate={translate}
            nodeSize={nodeSize}
            separation={{ siblings: 1.5, nonSiblings: 2 }}
            pathFunc="step"
            nodeSvgShape={{
              shape: 'circle',
              shapeProps: {
                r: 20,
                fill: '#3b82f6',
                stroke: '#1e40af',
                strokeWidth: 2
              }
            }}
            nodeLabelComponent={{
              render: <CustomNodeLabel />,
              foreignObjectWrapper: {
                y: -10,
                x: -25,
                width: 50,
                height: 40
              }
            }}
          />
        )}
      </div>
    </div>
  );
};