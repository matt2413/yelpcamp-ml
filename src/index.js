const express = require('express');
const ejs = require('ejs');

const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});
