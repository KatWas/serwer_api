const moongoose = require('moongose');

const testimonialsSchema = new moongoose.Schema({
    author: { type: String, reguire: true},
    text: { type: String, reguire: true},
});

module.exports = moongoose.model('Testimonial', testimonialsSchema);