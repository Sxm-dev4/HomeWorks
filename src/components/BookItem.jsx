import React from 'react';

const BookItem = ({ book, position, isTop }) => {
  return (
    <div className={`book-item ${isTop ? 'top-book' : ''}`}>
      <div className="book-position">
        #{position} {isTop && '(TOP)'}
      </div>
      <div className="book-details">
        <h3 className="book-title">{book.name}</h3>
        <p><strong>Autor:</strong> {book.author}</p>
        <p><strong>Editorial:</strong> {book.editorial}</p>
        <p><strong>ISBN:</strong> {book.isbn}</p>
      </div>
    </div>
  );
};

export default BookItem;