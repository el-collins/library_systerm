// src/controllers/bookController.js
const Book = require("../models/Book");
const { validateBook } = require("../utils/validation");

class BookController {
  // Get all books with pagination
  static async getAllBooks(req, res) {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const skip = (page - 1) * limit;

      const [books, total] = await Promise.all([
        Book.find().skip(skip).limit(limit).sort({ createdAt: -1 }),
        Book.countDocuments(),
      ]);

      const totalPages = Math.ceil(total / limit);

      const response = {
        status: "success",
        code: 200,
        message: "Books retrieved successfully",
        data: {
          books,
          pagination: {
            current_page: page,
            per_page: limit,
            total_pages: totalPages,
            total_books: total,
          },
        },
        links: {
          self: `/api/v1/books?page=${page}`,
          next: page < totalPages ? `/api/v1/books?page=${page + 1}` : null,
          prev: page > 1 ? `/api/v1/books?page=${page - 1}` : null,
        },
      };

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  // Get a specific book
  static async getBookById(req, res, next) {
    try {
      const book = await Book.findById(req.params.id);

      if (!book) {
        return res.status(404).json({
          status: "error",
          code: 404,
          message: "Book not found",
          errors: {
            details: "The requested book does not exist.",
          },
        });
      }

      res.status(200).json({
        status: "success",
        code: 200,
        message: "Book retrieved successfully",
        data: { book },
      });
    } catch (error) {
      next(error);
    }
  }

  // Add a new book
  static async createBook(req, res, next) {
    try {
      const validation = validateBook(req.body);
      if (!validation.isValid) {
        return res.status(400).json({
          status: "error",
          code: 400,
          message: "Validation failed",
          errors: validation.errors,
        });
      }

      const book = await Book.create(req.body);

      res.status(201).json({
        status: "success",
        code: 201,
        message: "Book created successfully",
        data: { book },
      });
    } catch (error) {
      next(error);
    }
  }

  // Update a book
  static async updateBook(req, res, next) {
    try {
      const validation = validateBook(req.body, true);
      if (!validation.isValid) {
        return res.status(400).json({
          status: "error",
          code: 400,
          message: "Validation failed",
          errors: validation.errors,
        });
      }

      const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });

      if (!book) {
        return res.status(404).json({
          status: "error",
          code: 404,
          message: "Book not found",
          errors: {
            details: "The requested book does not exist.",
          },
        });
      }

      res.status(200).json({
        status: "success",
        code: 200,
        message: "Book updated successfully",
        data: { book },
      });
    } catch (error) {
      next(error);
    }
  }

  // Update book availability
  static async updateBookAvailability(req, res, next) {
    const { available } = req.body;

    if (typeof available !== "boolean") {
      return res.status(400).json({
        status: "error",
        code: 400,
        message: "Validation failed",
        errors: {
          details: "The 'available' field must be a boolean value.",
        },
      });
    }

    try {
      const book = await Book.findByIdAndUpdate(
        req.params.id,
        { available },
        { new: true, runValidators: true }
      );

      if (!book) {
        return res.status(404).json({
          status: "error",
          code: 404,
          message: "Book not found",
          errors: {
            details: "The requested book does not exist.",
          },
        });
      }

      res.status(200).json({
        status: "success",
        code: 200,
        message: "Book availability updated successfully",
        data: { book },
      });
    } catch (error) {
      next(error);
    }
  }

  // Delete a book
  static async deleteBook(req, res, next) {
    try {
      const book = await Book.findByIdAndDelete(req.params.id);

      if (!book) {
        return res.status(404).json({
          status: "error",
          code: 404,
          message: "Book not found",
          errors: {
            details: "The requested book does not exist.",
          },
        });
      }

      res.status(200).json({
        status: "success",
        code: 200,
        message: "Book deleted successfully",
        data: null,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = BookController;
