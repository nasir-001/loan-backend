const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const config = require('./config/config');
const authRoutes = require('./routes/authRoutes');
const loanRoutes = require('./routes/loanRoutes');
const errorHandler = require('./middlewares/errorMiddleware');

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(rateLimit(config.RATE_LIMIT));

// Routes
app.use('/auth', authRoutes);
app.use('/loans', loanRoutes);
app.use('/loan', loanRoutes);

// Error handling
app.use(errorHandler);

module.exports = app;