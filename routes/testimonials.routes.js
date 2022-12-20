const express = require('express');
const router = express.Router();
const db = require('../src/db.js');
const shortid = require('shortid');


router.route('/testimonials').get(function(req, res) {
    res.json(db.testimonials);
});

router.route('/testimonials/random').get(function(req, res) {
    const randomIndex = Math.floor(Math.random() * db.testimonials.length);
    res.json(db.testimonials[randomIndex]);
});

router.route('/testimonials/:id').get(function(req, res) {
    res.json(db.testimonials.find(testimonial => testimonial.id === req.params.id))
});

router.route('/testimonials').post(function(req, res) {
    const newTestimonial = {
        id: shortid(),
        author: req.body.author,
        text: req.body.text
    };
    db.testimonials.push(newTestimonial)
    res.json(newTestimonial);
});

router.route('/testimonials/:id').put(function(req, res) {
    const testimonialIndex = db.testimonials.findIndex(tes => tes.id === req.params.id);
    db.testimonials[testimonialIndex] = {
        id: db.testimonials[testimonialIndex].id,
        author: req.body.author,
        text: req.body.text
    }

    res.json({
        success: true
    });
});

router.route('/testimonials/:id').delete(function(req, res) {
    const testimonialIndex = db.testimonials.findIndex(tes => tes.id === req.params.id);
    db.testimonials.splice(testimonialIndex, 0);

    res.json({
        success: true
    });
});


module.exports = router;