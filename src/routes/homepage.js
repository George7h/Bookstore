import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookList from '../components/booklist';
import BookForm from '../components/bookform';
import { addBook, removeBook } from '../redux/books/booksSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const handleAddBook = (newBook) => {
    dispatch(addBook(newBook));
  };

  const handleDeleteBook = (bookId) => {
    dispatch(removeBook(bookId));
  };

  return (
    <div>
      <h2>Booklist</h2>
      <BookList books={books} onDelete={handleDeleteBook} />
      <BookForm onAdd={handleAddBook} />
    </div>
  );
};

export default HomePage;
