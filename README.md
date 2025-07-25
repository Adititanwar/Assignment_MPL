# 📘 Blog Platform Backend

A minimal backend for a blog platform built with **Node.js**, **Express**, and **MongoDB**, featuring **user authentication** and **CRUD operations for blogs**.

## 🚀 Features

* User Signup & Login with JWT Authentication
* Password hashing using bcrypt
* Authenticated and role-based access to protected routes
* Full CRUD support for blog posts
* Clean REST API structure
* MongoDB with Mongoose ODM

## 📁 Folder Structure

```
Assignment_MPL/
└── Assignment/
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── routes/
    ├── .env
    ├── index.js
    └── package.json
```

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Assignment_MPL.git
cd Assignment_MPL/Assignment
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create .env File

Create a `.env` file in the root of the Assignment folder:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/blogDB
JWT_SECRET=its_my_secret_hehehe
```

### 4. Start the Development Server

```bash
npm run dev
```

Server will run at: `http://localhost:3000`

## 🔐 Environment Variables

| Variable | Description |
|----------|-------------|
| `PORT` | Server port (default: 3000) |
| `MONGO_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret key for signing JWT tokens |

## 📮 API Endpoints

### 🧑‍💼 Auth Routes

| Method | Route | Description |
|--------|--------|-------------|
| `POST` | `/api/auth/signup` | Register a new user |
| `POST` | `/api/auth/login` | Login user & get token |
| `GET` | `/api/auth/me` | Get logged-in user profile (Protected) |

### 📝 Blog Routes

| Method | Route | Description |
|--------|--------|-------------|
| `GET` | `/api/blogs` | Get all blog posts |
| `GET` | `/api/blogs/:id` | Get a single blog post |
| `POST` | `/api/blogs` | Create a blog (Auth required) |
| `PUT` | `/api/blogs/:id` | Update own blog (Auth required) |
| `DELETE` | `/api/blogs/:id` | Delete own blog (Auth/admin required) |



## 📬 Postman Collection

For easy API testing, we've published a Postman collection with all endpoints configured:

[![Run in Postman](https://run.pstmn.io/button.svg)](https://documenter.getpostman.com/view/46030068/2sB34kEK3b)

**📋 [View Documentation](https://documenter.getpostman.com/view/46030068/2sB34kEK3b)**

**Collection includes:**
- Pre-configured requests for all API endpoints
- Environment variables for easy server switching
- Authentication setup with JWT tokens
- Sample request bodies and test data
- Automated tests and validations

**To use the collection:**
1. Click the "Run in Postman" button above
2. Import the collection to your Postman workspace
3. Set up environment variables (`base_url`, `jwt_token`)
4. Start testing the API endpoints

**Quick Test Flow:**
1. Run `POST /auth/signup` to create a user
2. Run `POST /auth/login` to get JWT token
3. Use the token for authenticated blog operations

## 💬 Support

If you have any questions or need help with setup, please open an issue on GitHub.

