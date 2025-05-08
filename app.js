const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('✅ Hello from Jenkins + Docker + Node.js!');
});

app.listen(3000, '0.0.0.0', () => {
  console.log('🌐 App is running at http://0.0.0.0:3000');
});
