import React, { useState } from 'react';
import { Header } from './components/Header';
import { CitySelector } from './components/CitySelector';
import { GraphVisualization } from './components/GraphVisualization';
import { Statistics } from './components/Statistics';
import { initializeGraph } from './utils/initializeGraph';
import { prepareGraphData } from './utils/prepareGraphData';

function App() {
  const [graph] = useState(() => initializeGraph());
  const [selectedCity, setSelectedCity] = useState('Cali');

  const cities = ['Cali', 'Bogotá', 'Medellín', 'Cartagena'];
  const graphData = prepareGraphData(graph);
  const peopleList = graph.printPeopleByCity(selectedCity);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <Header />
      
      <CitySelector 
        cities={cities}
        selectedCity={selectedCity}
        onCityChange={setSelectedCity}
        peopleList={peopleList}
      />

      <GraphVisualization graphData={graphData} />

      <Statistics graph={graph} />
    </div>
  );
}

export default App;