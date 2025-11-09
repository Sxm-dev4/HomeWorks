export const prepareGraphData = (graph) => {
  return {
    nodes: graph.nodes.map(node => ({
      id: node.id,
      name: node.type === 'person' 
        ? `${node.name} (${node.age})` 
        : node.name,
      type: node.type
    })),
    links: graph.edges.map(edge => ({
      source: edge.source,
      target: edge.target,
    }))
  };
};