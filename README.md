# E-Commerce Store

A full-stack e-commerce application built with modern web technologies.

## Features

- User Authentication (Signup, Login, Logout)
- Product Management
- Shopping Cart Functionality
- Secure Payment Processing with Stripe
- Cloudinary Integration for Image Storage
- Redis for Caching
- MongoDB for Database
- Responsive Design

## Tech Stack

### Frontend
- React.js
- Redux for State Management
- Tailwind CSS for Styling
- Axios for API Calls

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for Authentication
- Redis for Caching
- Cloudinary for Image Storage
- Stripe for Payments

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Redis
- Cloudinary Account
- Stripe Account

## Installation

1. Clone the repository:
```bash
git clone
cd ecommerce_store
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following variables:
```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
REDIS_URL=your_redis_url
```

4. Start the development server:
```bash
npm run dev
```

## Project Structure

```
ecommerce_store/
├── backend/
│   ├── controllers/    # Route controllers
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── lib/            # Utility functions
│   └── server.js       # Entry point
├── frontend/
│   ├── public/         # Static files
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── pages/      # Page components
│   │   ├── redux/      # Redux store and slices
│   │   └── App.js      # Main App component
│   └── package.json
├── .env                # Environment variables
└── package.json        # Project dependencies
```

## API Endpoints

### Authentication
- POST /api/auth/signup - User registration
- POST /api/auth/login - User login
- POST /api/auth/logout - User logout

### Products
- GET /api/products - Get all products
- GET /api/products/:id - Get single product
- POST /api/products - Create product (Admin only)
- PUT /api/products/:id - Update product (Admin only)
- DELETE /api/products/:id - Delete product (Admin only)

### Cart
- GET /api/cart - Get user's cart
- POST /api/cart - Add item to cart
- PUT /api/cart/:id - Update cart item
- DELETE /api/cart/:id - Remove item from cart

### Orders
- POST /api/orders - Create order
- GET /api/orders - Get user's orders
- GET /api/orders/:id - Get single order

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Contact

For any queries or support, please reach out to the project maintainers.
