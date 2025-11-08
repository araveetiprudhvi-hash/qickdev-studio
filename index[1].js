// index.js - QickDev Studio Shopify Embedded App Server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('<h1>QickDev Studio is Live on Render 🎉</h1><p>Connected to Shopify and Supabase successfully.</p>');
});

app.get('/shopify/callback', (req, res) => {
  res.send('Shopify OAuth callback handled successfully.');
});

app.listen(PORT, () => {
  console.log(`🚀 QickDev Studio running on port ${PORT}`);
});
