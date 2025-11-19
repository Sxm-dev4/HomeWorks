import React, { useEffect, useRef } from "react";
import { SigmaContainer, useSigma } from "@react-sigma/core";
import "@react-sigma/core/lib/style.css";
import Graph from "graphology";
import forceAtlas2 from "graphology-layout-forceatlas2";

function GraphRenderer({ adjacency, selectedCityName }) {
  const sigma = useSigma();
  const graph = sigma.getGraph();

  const adjacencyString = JSON.stringify(adjacency);

  useEffect(() => {

    graph.clear();

    const cities = Object.keys(adjacency);

 
    cities.forEach((city, index) => {
      const angle = (2 * Math.PI * index) / Math.max(1, cities.length);
      const radius = 10;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      const isSelected = city === selectedCityName;

      graph.addNode(city, {
        label: city,
        size: isSelected ? 15 : 10,
        x,
        y,
        color: isSelected ? "#e74c3c" : "#3498db",
      });
    });

 
    Object.entries(adjacency).forEach(([city, neighbors]) => {
      neighbors.forEach((n) => {
        const edgeId = `${city}->${n}`;
        if (graph.hasNode(city) && graph.hasNode(n) && !graph.hasEdge(edgeId)) {
          graph.addEdgeWithKey(edgeId, city, n, {
            color: "#95a5a6",
          });
        }
      });
    });

 
    if (graph.order > 0) {
      forceAtlas2.assign(graph, {
        iterations: 50,
        settings: { gravity: 1 },
      });
    }

    sigma.refresh();
  }, [adjacencyString, selectedCityName, graph, sigma]);

  return null;
}

export default function GraphViz({ adjacency, selectedCityName }) {
  const graphRef = useRef(null);
  if (!graphRef.current) {
    graphRef.current = new Graph();
  }

  return (
    <div
      style={{
        height: "400px",
        width: "100%",
        border: "1px solid #333",
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      <SigmaContainer
        graph={graphRef.current}
        style={{ height: "100%", width: "100%" }}
        settings={{ allowInvalidContainer: true }}
      >
        <GraphRenderer
          adjacency={adjacency}
          selectedCityName={selectedCityName}
        />
      </SigmaContainer>
    </div>
  );
}