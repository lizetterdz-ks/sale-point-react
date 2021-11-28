// Modules
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;  

// Router
const routes = require('./routes/router');
const initializeDataBases = require('./infrastructure/');

// Middleware to parse body
app.use(express.json());

app.use(cors());

// Define routes
app.use(routes);

try {
  initializeDataBases();
} catch (e) {
  console.log(e);
  process.exit(1);
}

process.on('uncaughtException', err => {
  console.log('uncaughtException', err);
  process.exit(1);
});

app.use((req, res) => {
  res.status(404).json({
    message: 'Ups!!! Resource not found.',
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Sales-point database app listening at http://localhost:${PORT}`)
});