Blog Platform Backend
A simple Node.js blog platform with user authentication and CRUD operations.
Setup

Install dependencies

bashnpm install

Create .env file

envPORT=3000
MONGO_URI=mongodb://localhost:27017/blogDB
JWT_SECRET=your_secret_key

Start the server

bashnpm run dev
Server runs at http://localhost:3000
Environment Variables

PORT - Server port (default: 3000)
MONGO_URI - MongoDB connection string
JWT_SECRET - Secret key for JWT tokens

API Endpoints
Auth

POST /api/auth/signup - Register user
POST /api/auth/login - Login user
GET /api/auth/me - Get user profile

Blogs

GET /api/blogs - Get all blogs
GET /api/blogs/:id - Get single blog
POST /api/blogs - Create blog (auth required)
PUT /api/blogs/:id - Update blog (auth required)
DELETE /api/blogs/:id - Delete blog (auth required)
