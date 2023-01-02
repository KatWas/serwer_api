const express = require('express');
const router = express.Router();
const db = require('../src/db.js');
const shortid = require('shortid');
const { text } = require('express');


router.route('/seats').get(function(req, res) {
    res.json(db.seats);
});

router.route('/seats/random').get(function(req, res) {
    const randomIndex = Math.floor(Math.random() * db.seats.length);
    res.json(db.seats[randomIndex]);
});

router.route('/seats/:id').get(function(req, res) {
    res.json(db.seats.find(seat => seat.id === req.params.id))
});

router.route('/seats').post(function(req, res) {
    const newSeat = {
        id: shortid(),
        day: req.body.day,
        seat: req.body.seat,
        client: req.body.client,
        email: req.body.email
        
    };
    db.seats.push(newSeat)
    res.json({ message: 'OK' });
});

router.route('/Seats/:id').put(function(req, res) {
    const seatIndex = db.seat.findIndex(tes => tes.id === req.params.id);
    db.concerts[seatIndex] = {
        id: db.concerts[seatIndex].id,
        day: req.body.day,
        seat: req.body.seat,
        client: req.body.client,
        email: req.body.email
    }

    res.json({
        success: true
    });
});

router.route('/seats/:id').delete(function(req, res) {
    const seatIndex = db.seats.findIndex(tes => tes.id === req.params.id);
    db.seats.splice(seatIndex, 0);

    res.json({
        success: true
    });
});


module.exports = router;