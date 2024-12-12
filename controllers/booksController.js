const books = require('../models/booksModel');

// Get all books
exports.getAllBooks = (req, res) => {
  res.status(200).json(books);
};

// Get books by genre
exports.getBooksByGenre = (req, res) => {
  const genre = req.params.genre.toLowerCase();
  const filteredBooks = books.filter(book => book.genre.toLowerCase() === genre);

  if (filteredBooks.length > 0) {
    res.status(200).json(filteredBooks);
  } else {
    res.status(404).json({ message: `No books found for genre: ${genre}` });
  }
};