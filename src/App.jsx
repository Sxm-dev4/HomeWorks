import React, { useState, useEffect } from 'react';
import Queue from './utils/Queue';
import PersonForm from './components/PersonForm';
import QueueDisplay from './components/QueueDisplay';
import ATMControls from './components/ATMControls';
import './App.css';

const mockPeople = [
  { name: "Jose Cruz", withdrawalAmount: 150000 },
  { name: "Santiago Valencia", withdrawalAmount: 250000 },
  { name: "Felipe Sandoval", withdrawalAmount: 80000 },
  { name: "Ana Maria Gomez", withdrawalAmount: 120000 },
  { name: "Laura Martinez", withdrawalAmount: 300000 },
  { name: "Carlos Perez", withdrawalAmount: 50000 }
];

function App() {
  const [peopleQueue] = useState(() => new Queue());
  const [people, setPeople] = useState([]);
  const [currentlyServing, setCurrentlyServing] = useState(null);
  const [totalServed, setTotalServed] = useState(0);

  useEffect(() => {
    if (peopleQueue.isEmpty()) {
      const now = new Date();
      mockPeople.forEach((person, index) => {
        const arrivalTime = new Date(now.getTime() - (mockPeople.length - index) * 2 * 60000);
        peopleQueue.enqueue({
          ...person,
          arrivalTime: arrivalTime
        });
      });
      setPeople(peopleQueue.getAll());
      peopleQueue.print(); 
    }
  }, [peopleQueue]);

  const addPersonToQueue = (newPerson) => {
    peopleQueue.enqueue(newPerson);
    setPeople(peopleQueue.getAll());
    peopleQueue.print(); 
  };

  const serveNextPerson = () => {
    const nextPerson = peopleQueue.dequeue();
    if (nextPerson) {
      setCurrentlyServing(nextPerson);
      setPeople(peopleQueue.getAll());
      setTotalServed(prev => prev + 1);
      peopleQueue.print();
    }
  };

  const finishCurrentService = () => {
    if (currentlyServing) {
      alert(`${currentlyServing.name} ha completado su transacción`);
      setCurrentlyServing(null);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>ATM</h1>
        <p>Challenge 09 - Queue</p>
      </header>

      <div className="stats-bar">
        <div className="stat">
          <span className="stat-label">En Cola:</span>
          <span className="stat-value">{peopleQueue.size()}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Atendidos:</span>
          <span className="stat-value">{totalServed}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Siguiente:</span>
          <span className="stat-value">{peopleQueue.peek()?.name || 'Ninguno'}</span>
        </div>
      </div>

      <main>
        <section className="form-section">
          <PersonForm onAddPerson={addPersonToQueue} />
        </section>

        <section className="atm-section">
          <ATMControls 
            currentlyServing={currentlyServing}
            onServeNext={serveNextPerson}
            onFinishService={finishCurrentService}
            queueEmpty={peopleQueue.isEmpty()}
          />
        </section>

        <section className="queue-section">
          <QueueDisplay people={people} />
        </section>
      </main>
    </div>
  );
}

export default App;