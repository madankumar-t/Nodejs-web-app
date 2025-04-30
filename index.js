const express = require('express');
const app = express();

// Route
app.get('/', (req, res) => {
  res.send('Hello, CI/CD Pipeline!');
});

module.exports = app; // Export for tests