const express = require('express');
const fetch = require('node-fetch');
const app = express();

const PORT = 5000;

// Define the route to proxy the API request
app.get('/api/predicted_price', async (req, res) => {
  const apiUrl =
    'https://predictstockfunction.azurewebsites.net/api/http_trigger?code=B4b12QSeSlRST2VWWJ2QEafdmqT4_kKM2agvCrH6Ey4XAzFu8C0Q8g%3D%3D';

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data); // Send the API response to the frontend
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(500).json({ error: 'Error fetching data from the API' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
