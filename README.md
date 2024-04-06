# ECOMMERCE WEBSITE - MERN
## Project at UEL
### Deploy to hosting: [GakkiShop](https://gakki-shop.web.app/#).
However, it needs a few minutes for loading all data from MongoDB Cloud
### **MERN**
1. MongoDB
2. Express JS
3. React framework with Vite.
4. Node JS
5. CSS: Tailwind CSS

## Overview

This project is an E-commerce website built using the MERN (MongoDB, Express.js, React, Node.js) stack, following the MVC (Model-View-Controller) architecture. The frontend is developed using React with Vite as the build tool and Tailwind CSS for styling.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)
- [Others](#others)

## Features

- User authentication and authorization
- Product catalog with categories and filters
- Shopping cart functionality
- Checkout process with order management
- User profile and order history
- Admin panel for managing products, categories, and orders

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- MongoDB installed and running
- Git installed
- API keys (if required for external services)

## Installation

1. Clone the repository:
    ```
    git clone https://github.com/your-username/project-ecommerce.git
    ```
2. Navigate to the project directory:
    ```
    cd project-ecommerce
    ```
3. Install dependencies for both the server and the client:
Backend
    ```
    cd Backend
    npm install
    ```
Frontend
    ```
    cd Frontend
    npm install
    ```
## Configuration
Create a .env file in the server directory and add the following:
```
Copy code
PORT=3001
MONGODB_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_secret_key
```
=> Replace your_secret_key with a secure secret for JWT.
Configure other environment variables as needed for external services.
## Usage
1. Start the backend:
    ```
    cd backend
    npm run server
    ```
2. Start the frontend:
    ```
    cd frontend
    npm run dev
    ```
Open your browser and visit http://localhost:3000 to view the application.
## Folder Structure
```
project-ecommerce/
│
├── server/                 # Server-side code (Node.js, Express)
│   ├── controllers/        # Controllers for handling business logic
│   ├── models/             # MongoDB models
│   ├── routes/             # Express routes
│   └── ...
│
├── client/                 # Client-side code (React with Vite)
│   ├── public/             # Public assets
│   ├── src/                # Source code
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API services
│   │   └── ...
│   └── ...
│
├── .gitignore              # Git ignore file
├── .env                    # Environment variables
├── package.json            # Node.js dependencies and scripts
└── README.md               # Project documentation
```
## Contributing
If you'd like to contribute to this project, please follow the Contribution Guidelines.
## License:
...
## Others:
- Vite guide: https://vitejs.dev/guide/
