import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

const port = process.env.PORT || 5000;

connectDB();

const app = express();

// **** Middleware ****

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  Cookie Parser Middleware
app.use(cookieParser());


// Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes)

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);
