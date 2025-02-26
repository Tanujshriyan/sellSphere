# SellSphere

SellSphere is a comprehensive MERN stack e-commerce platform that enables sellers to list and sell products while providing detailed analytics and insights about product performance.


## About The Project

SellSphere is designed as a marketplace where individual sellers or businesses can list their products and track their performance. The platform provides rich analytics to help sellers understand which products are performing well and optimize their offerings accordingly.

### Key Features

- User authentication with separate buyer and seller accounts
- Product listing and management
- Shopping cart and checkout system
- Order processing and tracking
- Advanced analytics for sellers
- Product review and rating system
- Responsive design for mobile and desktop
- Secure payment processing
- Real-time notifications

### Built With

- MongoDB - Database
- Express - Backend framework
- React - Frontend library
- Node.js - Runtime environment
- JWT - Authentication
- Bootstrap/React Bootstrap - UI components
- Chart.js - Data visualization

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- Node.js (v16.0.0 or later)
- npm (v8.0.0 or later)
- MongoDB (v5.0 or later)

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/Tanujshriyan/sellsphere.git
   cd sellsphere
   ```

2. Install backend dependencies
   ```sh
   npm install
   ```

3. Install frontend dependencies
   ```sh
   cd frontend
   npm install
   cd ..
   ```

4. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=27017
   MONGO_URI=mongodb://localhost:27017/sellsphere
   NODE_ENV=development
   ```

5. Start the development server
   ```sh
   # Run backend and frontend concurrently
   npm run dev
   
   # Or run separately
   npm run server
   npm run client
   ```

## Project Structure

```
sellsphere/
├── backend/
│   ├── config/         - Configuration files
│   ├── controllers/    - Route controllers
│   ├── middleware/     - Custom middleware
│   ├── models/         - MongoDB models
│   ├── routes/         - API routes
│   └── utils/          - Utility functions
├── frontend/
│   ├── public/         - Static files
│   └── src/
│       ├── assets/     - Images, styles, etc.
│       ├── components/ - React components
│       ├── context/    - Context API files
│       ├── pages/      - Page components
│       ├── services/   - API service functions
│       └── utils/      - Utility functions
└── package.json        - Project dependencies
```

## Data Models

SellSphere uses the following key data models:

- **User**: Basic user information and authentication details
- **Seller**: Extended user model with business details and metrics
- **Product**: Product listings with details and inventory
- **Order**: Customer orders and fulfillment status
- **Payment**: Payment transaction records
- **Review**: Product reviews and ratings
- **Category/Brand**: Product categorization
- **Analytics**: Data collection for insights and reporting

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user profile

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create new product (seller only)
- `PUT /api/products/:id` - Update product (seller only)
- `DELETE /api/products/:id` - Delete product (seller only)

### Orders
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get order details
- `POST /api/orders` - Create new order
- `PUT /api/orders/:id` - Update order status (seller only)

### Analytics
- `GET /api/analytics/sales` - Get sales analytics (seller only)
- `GET /api/analytics/products` - Get product performance (seller only)
- `GET /api/analytics/customers` - Get customer insights (seller only)

## Frontend Pages

- Home/Landing page
- Product listing page
- Product detail page
- Shopping cart
- Checkout process
- User profile
- Seller dashboard
- Order history/tracking
- Analytics dashboard for sellers

## Features for Sellers

SellSphere provides sellers with powerful tools to manage their business:

- **Dashboard**: Overview of sales, orders, and performance metrics
- **Product Management**: Add, edit, and manage product listings
- **Order Management**: Process and track customer orders
- **Analytics**: Detailed insights into:
  - Product views and conversion rates
  - Customer behavior patterns
  - Sales trends and forecasts
  - Inventory optimization recommendations

## Future Enhancements

- Mobile app (React Native)
- Advanced search with filters
- Recommendation engine
- Bulk product upload
- Subscription-based seller tiers
- Multi-vendor shopping cart
- Integrated marketing tools
- A/B testing for product listings

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- ## License

Distributed under the MIT License. See `LICENSE` for more information. -->

## Contact

[Tanuj Shriyan](https://www.linkedin.com/in/tanjshx/) - [@tanj.shx](https://twitter.com/tanj.shx) - tanj.shx@gmail.com


Project Link: [https://github.com/Tanujshriyan/sellSphere](https://github.com/Tanujshriyan/sellSphere)

## Acknowledgments

- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js](https://expressjs.com/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Node.js Documentation](https://nodejs.org/en/docs/)
