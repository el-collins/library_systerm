# 📚 Library Management System API

A robust RESTful API for managing a digital library system, built with Node.js, Express, and MongoDB. This API provides comprehensive endpoints for book management, including creation, retrieval, updates, and deletion operations.

## 🚀 Features

- **Complete Book Management:** Full CRUD operations for library books
- **Advanced Querying:** Filter, sort, and paginate book collections
- **Data Validation:** Comprehensive input validation and sanitization
- **Error Handling:** Detailed error messages and status codes
- **Rate Limiting:** Protected against abuse with rate limiting
- **API Documentation:** Complete Postman documentation included

## 🛠️ Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose ODM
- Postman (for documentation and testing)

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn package manager
- Postman (for testing)

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/library-management-api.git
   cd library-management-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   ```bash
   # Copy the example environment file
   cp .env.example .env

   # Edit .env with your configurations
   nano .env
   ```

4. **Environment variables**
   ```env
   NODE_ENV=development
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/library
   RATE_LIMIT_TIME=15
   RATE_LIMIT_MAX=100
   ```

## 🚀 Running the Application

### Development
```bash
# Run with nodemon for development
npm run dev
```

### Production
```bash
# Build and start for production
npm run start
```

## 📖 API Documentation

### Base URLs
- Production: `https://library-systerm.vercel.app/api/v1`
- Development: `http://localhost:3000/api/v1`

### Available Endpoints

#### Books
- `GET /books` - Get all books (with pagination)
- `GET /books/:id` - Get a single book
- `POST /books` - Create a new book
- `PUT /books/:id` - Update a book
- `PATCH /books/:id/availability` - Update book availability
- `DELETE /books/:id` - Delete a book

### Example Request
```bash
curl -X GET 'http://localhost:3000/api/v1/books?page=1&limit=10&genre=fiction'
```

### Response Format
```json
{
    "status": "success",
    "code": 200,
    "message": "Operation successful",
    "data": {
        "books": [],
        "pagination": {
            "current_page": 1,
            "per_page": 10,
            "total_pages": 1,
            "total_books": 0
        }
    }
}
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage
```

## 📝 API Field Validation

- **title:** Required, 1-100 characters
- **author:** Required, 1-100 characters
- **genre:** Required, one of: ["fiction", "non-fiction", "science", "history", "technology"]
- **publicationDate:** Required, ISO 8601 date format
- **summary:** Optional, max 500 characters
- **edition:** Optional, string
- **available:** Optional, boolean, defaults to true

## 🔒 Rate Limiting

- 100 requests per IP per 15 minutes
- Headers included in response:
  - X-RateLimit-Limit
  - X-RateLimit-Remaining
  - X-RateLimit-Reset

## 🛟 Error Handling

The API uses consistent error response format:

```json
{
    "status": "error",
    "code": 400,
    "message": "Error message",
    "errors": {
        "details": "Specific error details"
    }
}
```

## 📈 Status Codes

- 200: Success
- 201: Created
- 400: Bad Request
- 404: Not Found
- 429: Too Many Requests
- 500: Server Error

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 👥 Authors

- **Collins** - *Initial work* - [YourGitHub](https://github.com/el-collins)

## 🙏 Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc

## 📞 Support

For support and queries:
- Create an issue in the repository
- Email: support@yourdomain.com

---
*Made with ❤️ by Collins*