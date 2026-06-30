# Backend Authentication Service

A Node.js + Express.js authentication backend with PostgreSQL database.

## Folder Structure

```
backend/
├── server.js                 # Main server entry point
├── package.json              # Dependencies and scripts
├── .env.example              # Environment variables template
├── .gitignore                # Git ignore file
└── authentication/
    ├── config/
    │   ├── database.js       # PostgreSQL connection pool
    │   └── schema.sql        # Database schema
    ├── controllers/
    │   └── authController.js # Authentication logic
    ├── middleware/
    │   ├── auth.js           # JWT verification middleware
    │   └── validation.js     # Input validation middleware
    ├── routes/
    │   └── authRoutes.js     # API routes
    └── utils/
        ├── passwordUtils.js  # Password hashing utilities
        └── tokenUtils.js     # JWT token utilities
```

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env` and update the values:

```bash
cp .env.example .env
```

Update the following in `.env`:
- `DB_NAME`: Your PostgreSQL database name
- `DB_USER`: Your PostgreSQL username
- `DB_PASSWORD`: Your PostgreSQL password
- `JWT_SECRET`: A strong random string for JWT signing

### 3. Setup Database

Create a PostgreSQL database and run the schema:

```bash
psql -U your_username -d your_database_name -f authentication/config/schema.sql
```

Or manually execute the SQL commands in `authentication/config/schema.sql`.

### 4. Run the Server

Development mode (with nodemon):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will start on `http://localhost:5000` (or the port specified in `.env`).

## API Endpoints

### Authentication Routes (`/api/auth`)

#### POST `/api/auth/register`
Register a new user.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

#### POST `/api/auth/login`
Login an existing user.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

#### GET `/api/auth/profile`
Get current user profile (protected route).

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "created_at": "2024-01-01T00:00:00.000Z"
    }
  }
}
```

### Health Check

#### GET `/health`
Check if the server is running.

**Response:**
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Security Features

- **Password Hashing**: Uses bcrypt with 10 salt rounds
- **JWT Authentication**: Secure token-based authentication
- **Input Validation**: Validates all incoming requests
- **CORS Protection**: Configured for specific origins
- **SQL Injection Prevention**: Uses parameterized queries

## Connecting Frontend

Update your frontend API calls to point to this backend:

```javascript
const API_URL = 'http://localhost:5000/api/auth';

// Register
const register = async (userData) => {
  const response = await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  return await response.json();
};

// Login
const login = async (credentials) => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  return await response.json();
};
```

Store the returned token in localStorage or cookies and include it in protected requests:

```javascript
const getProfile = async () => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_URL}/profile`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  return await response.json();
};
```
