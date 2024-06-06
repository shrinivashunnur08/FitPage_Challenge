const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001; 
const path = require('path');

app.use(cors());

app.get('/data.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'data', 'data.json'));
});

app.listen(port, () => {
  console.log(`Server is running on Port: ${port}`);
});
