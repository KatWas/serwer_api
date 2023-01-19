const moongoose = require('mongoose');

const seatsSchema = new moongoose.Schema({
    day: { type: Number, reguire: true},
    seat: { type: Number, reguire: true},
    client: { type: String, reguire: true},
    email: {type: String, require: true}
});

module.exports = moongoose.model('Seat', seatsSchema);