const express = require('express');
const router = express.Router();
const db = require('../src/db.js');
const shortid = require('shortid');


router.route('/concerts').get(function(req, res) {
    res.json(db.seats);
});

router.route('/concerts/random').get(function(req, res) {
    const randomIndex = Math.floor(Math.random() * db.seats.length);
    res.json(db.seats[randomIndex]);
});

router.route('/concerts/:id').get(function(req, res) {
    res.json(db.seats.find(concert => concert.id === req.params.id))
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
    db.seats.push(newConcert)
    res.json(newConcert);
});

router.route('/Concerts/:id').put(function(req, res) {
    const concertIndex = db.concert.findIndex(tes => tes.id === req.params.id);
    db.seats[concertIndex] = {
        id: db.seats[concertIndex].id,
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
    const concertIndex = db.seats.findIndex(tes => tes.id === req.params.id);
    db.seats.splice(concertIndex, 0);

    res.json({
        success: true
    });
});


module.exports = router;