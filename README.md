# Loan Management System Backend

A RESTful API for managing loans and staff members with JWT authentication and role-based access control.

## Features

- 🔐 JWT Authentication with 1-hour expiration
- 👥 Role-based access control (superAdmin, admin, staff)
- 📊 Loan management endpoints with filtering capabilities
- ⚠️ Error handling middleware
- 🔒 Security headers & rate limiting
- 📝 Request logging with Morgan

## Technologies

- Node.js (v18+)
- Express.js
- JSON Web Tokens (JWT)
- CORS
- Helmet (Security headers)
- Morgan (HTTP request logger)
- express-rate-limit

## Installation

1. **Prerequisites**
   - Node.js v18 or higher
   - npm v9 or higher
   - Git (for cloning repository)

2. **Clone Repository**
   ```bash
   git clone https://github.com/yourusername/loan-management-system.git
   cd loan-management-system

3. **Install the project**
    ```bash
    npm install

4. **Run the project**
    ```bash
    node server.js