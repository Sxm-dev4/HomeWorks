import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementBy } from './store/slices/counterSlice';
import { push, pop, clear } from './store/slices/stackSlice';

export const App = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);
  const { items } = useSelector((state) => state.stack);
  
  const [incrementValue, setIncrementValue] = useState('');
  const [stackValue, setStackValue] = useState('');

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementBy = () => {
    const value = parseInt(incrementValue);
    if (!isNaN(value) && incrementValue !== '') {
      dispatch(incrementBy(value));
    } else {
      alert('Por favor ingresa un número válido primero');
    }
  };

  const handleDecrementBy = () => {
    const value = parseInt(incrementValue);
    if (!isNaN(value) && incrementValue !== '') {
      dispatch(incrementBy(-value));
    } else {
      alert('Por favor ingresa un número válido primero');
    }
  };

  const handlePush = () => {
    if (stackValue.trim() !== '') {
      dispatch(push(stackValue));
      setStackValue('');
    } else {
      alert('Por favor ingresa un valor');
    }
  };

  const handlePop = () => {
    dispatch(pop());
  };

  const handleClear = () => {
    dispatch(clear());
  };

 return (
    <div style={{ 
      maxWidth: '700px',
      margin: '0 auto',
      padding: '40px 20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h1 style={{ 
        textAlign: 'center',
        marginBottom: '40px',
        color: '#333'
      }}>Redux Challenge 10</h1>
      
      {/* Contador */}
      <div style={{ 
        background: '#fff',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '24px',
        marginBottom: '24px'
      }}>
        <h2 style={{ marginTop: '0', color: '#555' }}>Contador</h2>
        
        <div style={{
          fontSize: '48px',
          fontWeight: 'bold',
          textAlign: 'center',
          margin: '20px 0',
          color: '#333'
        }}>
          {count}
        </div>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '24px' }}>
          <button 
            onClick={handleIncrement}
            style={{
              flex: 1,
              padding: '12px',
              fontSize: '16px',
              backgroundColor: '#2874a7ff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Incremento (+1)
          </button>
          
          <button 
            onClick={handleDecrement}
            style={{
              flex: 1,
              padding: '12px',
              fontSize: '16px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Reduccion (-1)
          </button>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', color: '#555' }}>
            Incremento/Reducción por valor personalizado:
          </label>
          <input
            type="number"
            value={incrementValue}
            onChange={(e) => setIncrementValue(e.target.value)}
            placeholder="Ejemplo: 10"
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              boxSizing: 'border-box'
            }}
          />
          {incrementValue && (
            <small style={{ color: '#666', display: 'block', marginTop: '4px' }}>
              Incrementará/Reducirá de {incrementValue} en {incrementValue}
            </small>
          )}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            onClick={handleIncrementBy}
            style={{
              flex: 1,
              padding: '12px',
              fontSize: '16px',
              backgroundColor: '#2874a7ff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Incremento {incrementValue ? `(+${incrementValue})` : ''}
          </button>
          
          <button 
            onClick={handleDecrementBy}
            style={{
              flex: 1,
              padding: '12px',
              fontSize: '16px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Reduccion {incrementValue ? `(-${incrementValue})` : ''}
          </button>
        </div>
      </div>

      {/* Stack */}
      <div style={{ 
        background: '#fff',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '24px'
      }}>
        <h2 style={{ marginTop: '0', color: '#555' }}>Implementacion de pilas</h2>
        <p style={{ color: '#666', marginBottom: '20px' }}>
          Elementos: <strong>{items.length}</strong>
        </p>
        
        <div style={{ marginBottom: '20px' }}>
          <input
            type="text"
            value={stackValue}
            onChange={(e) => setStackValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handlePush()}
            placeholder="Ingresa un valor"
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              boxSizing: 'border-box',
              marginBottom: '10px'
            }}
          />
          
          <div style={{ display: 'flex', gap: '8px' }}>
            <button 
              onClick={handlePush}
              style={{
                flex: 1,
                padding: '10px',
                fontSize: '14px',
                backgroundColor: '#2874a7ff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Push
            </button>
            <button 
              onClick={handlePop}
              disabled={items.length === 0}
              style={{
                flex: 1,
                padding: '10px',
                fontSize: '14px',
                backgroundColor: items.length === 0 ? '#ccc' : '#000000ff',
                color: items.length === 0 ? '#666' : 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: items.length === 0 ? 'not-allowed' : 'pointer'
              }}
            >
              Pop
            </button>
            <button 
              onClick={handleClear}
              disabled={items.length === 0}
              style={{
                flex: 1,
                padding: '10px',
                fontSize: '14px',
                backgroundColor: items.length === 0 ? '#ccc' : '#dc3545',
                color: items.length === 0 ? '#666' : 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: items.length === 0 ? 'not-allowed' : 'pointer'
              }}
            >
              Clear
            </button>
          </div>
        </div>

        <div style={{
          background: '#f8f9fa',
          border: '1px solid #e9ecef',
          borderRadius: '4px',
          padding: '16px',
          minHeight: '150px'
        }}>
          <h4 style={{ marginTop: '0', color: '#555' }}>Pilas:</h4>
          {items.length === 0 ? (
            <p style={{ color: '#999', textAlign: 'center', margin: '30px 0' }}>
              Pila vacía
            </p>
          ) : (
            <div>
              {[...items].reverse().map((item, index) => (
                <div 
                  key={items.length - index - 1}
                  style={{
                    background: 'white',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    padding: '12px',
                    marginBottom: '8px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <span style={{ fontWeight: '500' }}>{item}</span>
                  <span style={{ 
                    fontSize: '12px',
                    color: '#666',
                    background: '#e9ecef',
                    padding: '4px 8px',
                    borderRadius: '3px'
                  }}>
                    {index === 0 ? 'TOP' : `Pos ${items.length - index - 1}`}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 