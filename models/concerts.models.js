const mongoose = require ('mongoose');

const concertsSchema = new mongoose.Schema({
    performer: {type: String, required: true},
    genre: { type: String, reguire: true},
    price: { type: Number, reguire: true},
    day: { type: Number, reguire: true},
    image: { type: String, reguire: true},
});

module.exports = mongoose.model('Concert', concertsSchema);