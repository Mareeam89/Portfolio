const express = require('express');
const router = express.Router();
const Devotional = require('../models/Devotional');

router.get('/', async (req, res) => {
    const devotionals = await Devotional.find().sort({ date: -1 });
    res.json(devotionals);
});

router.post('/', async (req, res) => {
    const newDevotional = new Devotional(req.body);
    await newDevotional.save();
    res.json({ message: "Devotional added!" });
});

module.exports = router;

