const express = require('express');
const router = express.Router();
const Sermon = require('../models/Sermon');

router.get('/', async (req, res) => {
    const sermons = await Sermon.find().sort({ date: -1 });
    res.json(sermons);
});

router.post('/', async (req, res) => {
    const newSermon = new Sermon(req.body);
    await newSermon.save();
    res.json({ message: "Sermon added!" });
});

module.exports = router;

