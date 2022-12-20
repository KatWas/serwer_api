const express = require('express');
const path = require('path');

const app = express();


// import routes
const testimonialsRoutes = require('./routes/testimonials.routes');
const concertsRoutes = require('./routes/concerts.routes');
const seatsRoutes = require('./routes/seats.routes');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/api', testimonialsRoutes);

app.use(( req, res ) => {
res.status(400).send('404 not found...');
});


app.listen(8000, () => {
console.log('Server is running on port: 8000');
});