const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, required: true },
    numberInStock: { type: Number, required: true },
    genre: { type: String, required: true },
    image: { data: Buffer, contentType: String },
    rate: { type: Number, required: true }
});

module.exports = mongoose.model('Movie', movieSchema, 'movies');