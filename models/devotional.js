const mongoose = require('mongoose');

const DevotionalSchema = new mongoose.Schema({
    title: String,
    content: String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Devotional', DevotionalSchema);

