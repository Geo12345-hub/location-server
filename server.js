const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Enable CORS to allow requests from the frontend
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to receive geolocation data
app.post('/location', (req, res) => {
  const { latitude, longitude } = req.body;
  console.log(`Received location: Latitude ${latitude}, Longitude ${longitude}`);
  
  // You can add code here to save the data to a database if needed
  
  res.json({ status: 'Location received' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

