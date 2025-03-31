const mongoose = require('mongoose');

const SermonSchema = new mongoose.Schema({
    title: String,
    preacher: String,
    audioUrl: String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Sermon', SermonSchema);

