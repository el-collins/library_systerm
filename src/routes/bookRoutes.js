// src/routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const BookController = require('../controllers/bookController');

/**
 * @swagger
 * /api/v1/books:
 *   get:
 *     summary: Retrieve all books with pagination
 */
router.get('/books', BookController.getAllBooks);

/**
 * @swagger
 * /api/v1/books/{id}:
 *   get:
 *     summary: Get details of a specific book
 */
router.get('/books/:id', BookController.getBookById);

/**
 * @swagger
 * /api/v1/books:
 *   post:
 *     summary: Add a new book to the library
 */
router.post('/books', BookController.createBook);

/**
 * @swagger
 * /api/v1/books/{id}:
 *   put:
 *     summary: Update details of an existing book
 */
router.put('/books/:id', BookController.updateBook);

/**
 * @swagger
 * /api/v1/books/{id}:
 *   delete:
 *     summary: Remove a book from the library
 */
router.delete('/books/:id', BookController.deleteBook);

module.exports = router;