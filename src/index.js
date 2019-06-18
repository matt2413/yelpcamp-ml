const express = require('express');
const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs');
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.render('landing');
});

app.get('/campgrounds', (req, res) => {
  const campgrounds = [
    {
      name: 'Salmon Creek',
      image: 'https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      name: 'Granite Hill',
      image: 'https://images.pexels.com/photos/587976/pexels-photo-587976.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      name: "Mountain Goat's Rest",
      image: 'https://images.pexels.com/photos/1309584/pexels-photo-1309584.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    }
  ];
  res.render('campgrounds', { campgrounds: campgrounds });
});

app.listen(port, () => {
  console.log('Yelpcamp server is up on port ' + port);
});
