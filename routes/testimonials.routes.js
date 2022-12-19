const express = require('express');
const router = express.Router();


router.route('/testimonials').get();

router.route('/testimonials/random').get();

router.route('/testimonials/:id').get();

router.route('/testimonials').post();

router.route('/testimonials/:id').put();

router.route('/testimonials/:id').delete();


module.exports = router;