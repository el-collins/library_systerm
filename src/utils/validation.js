// src/utils/validation.js
const validateBook = (data, isUpdate = false) => {
    const errors = {};
  
    if (!isUpdate) {
      if (!data.title) errors.title = 'Title is required';
      if (!data.author) errors.author = 'Author is required';
      if (!data.genre) errors.genre = 'Genre is required';
      if (!data.publicationDate) errors.publicationDate = 'Publication date is required';
    }
  
    if (data.title && typeof data.title !== 'string') {
      errors.title = 'Title must be a string';
    }
  
    if (data.author && typeof data.author !== 'string') {
      errors.author = 'Author must be a string';
    }
  
    if (data.genre && typeof data.genre !== 'string') {
      errors.genre = 'Genre must be a string';
    }
  
    if (data.publicationDate && isNaN(new Date(data.publicationDate).getTime())) {
      errors.publicationDate = 'Invalid publication date format';
    }
  
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  };
  
  module.exports = {
    validateBook
  };
  