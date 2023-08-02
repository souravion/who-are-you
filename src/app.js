const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../db/mongoose');
const config = require('../project/config/index');
const v1UserRoutes = require('./routes/v1/userRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// API Routes
app.use('/api/users', v1UserRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

const port = config.port || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
