import React, { useRef, useEffect } from 'react';
import ForceGraph2D from 'react-force-graph-2d';

export const GraphCanvas = ({ graphData }) => {
  const fgRef = useRef();

  useEffect(() => {
    const fg = fgRef.current;
    if (fg) {
      setTimeout(() => {
        fg.zoomToFit(400, 50);
      }, 100);
    }
  }, []);

  return (
    <div style={{ 
      border: '2px solid #e0e0e0', 
      borderRadius: '8px',
      overflow: 'hidden',
      background: '#fff'
    }}>
      <ForceGraph2D
        ref={fgRef}
        graphData={graphData}
        width={800}
        height={500}
        nodeLabel="name"
        nodeAutoColorBy="type"
        nodeCanvasObject={(node, ctx, globalScale) => {
          const label = node.name;
          const fontSize = 12/globalScale;
          ctx.font = `${fontSize}px Sans-Serif`;
          
          ctx.beginPath();
          if (node.type === 'city') {
            ctx.fillStyle = '#ff6b6b';
            ctx.fillRect(node.x - 8, node.y - 8, 16, 16);
          } else {
            ctx.fillStyle = '#4ecdc4';
            ctx.arc(node.x, node.y, 8, 0, 2 * Math.PI, false);
            ctx.fill();
          }
          
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = '#333';
          ctx.fillText(label, node.x, node.y + 15);
        }}
        linkColor={() => '#999'}
        linkWidth={2}
        backgroundColor="#ffffff"
        enableNodeDrag={true}
        enableZoomInteraction={true}
        enablePanInteraction={true}
      />
    </div>
  );
};