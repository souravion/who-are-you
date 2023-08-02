const mongoose = require('mongoose');
const config = require('../project/config/index');

// MongoDB connection string
const dbUrl = `mongodb://${config.database.host}:${config.database.port}/${config.database.database}`;

// Connect to the MongoDB database
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// Handle connection events
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to the MongoDB database');
});

module.exports = db;