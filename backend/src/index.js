// backend/index.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const calculatorRoutes = require('./routes/calculatorRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api', calculatorRoutes);

// Home route
app.get('/', (req, res) => {
  res.send('Backend server is running.');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
