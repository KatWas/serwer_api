const express = require('express');
const router = express.Router();
const db = require('../src/db.js');
const shortid = require('shortid');


router.route('/concerts').get(function(req, res) {
    res.json(db.concerts);
});

router.route('/concerts/random').get(function(req, res) {
    const randomIndex = Math.floor(Math.random() * db.concerts.length);
    res.json(db.concerts[randomIndex]);
});

router.route('/concerts/:id').get(function(req, res) {
    res.json(db.concerts.find(concert => concert.id === req.params.id))
});

router.route('/concerts').post(function(req, res) {
    const newConcert = {
        id: shortid(),
        performer: req.body.performer,
        genre: req.body.genre,
        price: req.body.price,
        day: req.body.day,
        image: req.body.image
    };
    db.concerts.push(newConcert)
    res.json(newConcert, { message: 'OK' });
});

router.route('/Concerts/:id').put(function(req, res) {
    const concertIndex = db.concert.findIndex(tes => tes.id === req.params.id);
    db.concerts[concertIndex] = {
        id: db.concerts[concertIndex].id,
        performer: req.body.performer,
        genre: req.body.genre,
        price: req.body.price,
        day: req.body.day,
        image: req.body.image

    }

    res.json({
        success: true
    });
});

router.route('/concerts/:id').delete(function(req, res) {
    const concertIndex = db.concerts.findIndex(tes => tes.id === req.params.id);
    db.concerts.splice(concertIndex, 0);

    res.json({
        success: true
    });
});


module.exports = router;