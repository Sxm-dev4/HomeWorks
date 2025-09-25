import React from 'react';
import BookItem from './BookItem';

const BookStack = ({ books }) => {
  return (
    <div className="book-stack">
      {books.length === 0 ? (
        <p className="empty-stack">La pila está vacía</p>
      ) : (
        <>
          <div className="stack-info">
            <small>Mostrando del más reciente al más antiguo</small>
          </div>
          <div className="books-container">
            {books.map((book, index) => (
              <BookItem 
                key={`${book.isbn}-${index}`} 
                book={book} 
                position={index + 1}
                isTop={index === 0}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default BookStack;