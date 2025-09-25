import React, { useState, useEffect } from 'react';
import Stack from './utils/Stack';
import BookForm from './components/BookForm';
import BookStack from './components/BookStack';
import './App.css';

  const mockBooks = [
  {
    name: "Crimen y castigo",
    isbn: "978-84-376-0490-9",
    author: "Fiódor Dostoievski",
    editorial: "Editorial Alianza"
  },
  {
    name: "Orgullo y prejuicio",
    isbn: "978-0-19-953556-9",
    author: "Jane Austen",
    editorial: "Oxford University Press"
  },
  {
    name: "1984",
    isbn: "978-0-452-28423-4",
    author: "George Orwell",
    editorial: "Secker & Warburg"
  }
];

function App() {
  const [bookStack] = useState(() => new Stack());
  const [books, setBooks] = useState([]);



  useEffect(() => {
    mockBooks.forEach(book => bookStack.push(book));
    setBooks(bookStack.getAll());
  }, [bookStack]);

  const addBook = (newBook) => {
    bookStack.push(newBook);
    setBooks(bookStack.getAll());
    bookStack.print(); 
  };

  const removeLastBook = () => {
    const removedBook = bookStack.pop();
    if (removedBook) {
      setBooks(bookStack.getAll());
      alert(`Libro removido: ${removedBook.name}`);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Stack de Libros</h1>
      </header>

      <main className="main-content">
        <div className="form-section">
          <BookForm onAddBook={addBook} />
        </div>

        <div className="stack-section">
          <div className="stack-controls">
            <h2>Pila de Libros ({bookStack.size()} libros)</h2>
            <button 
              onClick={removeLastBook}
              disabled={bookStack.isEmpty()}
              className="remove-btn"
            >
              Remover Último Libro (Pop)
            </button>
          </div>
          <BookStack books={books} />
        </div>
      </main>
    </div>
  );
}

export default App;