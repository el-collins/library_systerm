// src/middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
  
    const error = {
      status: 'error',
      code: err.statusCode || 500,
      message: err.message || 'Internal Server Error',
      errors: err.errors || {}
    };
  
    res.status(error.code).json(error);
  };
  
  module.exports = errorHandler;