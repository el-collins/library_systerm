// src/models/Book.js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Book title is required'],
    trim: true
  },
  author: {
    type: String,
    required: [true, 'Author name is required'],
    trim: true
  },
  genre: {
    type: String,
    required: [true, 'Genre is required'],
    trim: true
  },
  publicationDate: {
    type: Date,
    required: [true, 'Publication date is required']
  },
  edition: {
    type: String,
    trim: true
  },
  summary: {
    type: String,
    trim: true
  },
  available: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);