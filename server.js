const express = require('express');
const path = require('path');

const app = express();


// import routes
const testimonialsRoutes = require('./routes/testimonials.routes');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', testimonialsRoutes);

app.get('/testimonials',(req, res)=>{
  res.render('')
});

app.get('/testimonials/:id',(req, res)=>{
  res.render('')
});

app.get('/testimonials/random',(req, res)=>{
  res.render('')
});

app.post('testimonials', (req, res) => {

  const { id, author, text } = req.body;

  if(id && author && text) {
    res.send('OK');
  }
  else {
    res.send('error')
  }

});

app.put('/testimonials',(req, res)=>{
  res.render('OK')
});

app.delete('/testimonials/:id',(req, res)=>{
  res.render('OK')
});


app.use(( req, res ) => {
  res.status(400).send('404 not found...');
});


app.listen(8000, () => {
    console.log('Server is running on port: 8000');
  });