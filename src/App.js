import React from 'react';
import './App.css';
import Parent from './components/Challenge04/Parent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Challenge 04</h1>
        <p>Gestión de Categorías</p>
      </header>

      <main style={{ minHeight: '100vh', paddingBottom: '40px' }}>
        <Parent />
      </main>
    </div>
  );
}

export default App;