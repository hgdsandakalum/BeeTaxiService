const express = require('express');
const router = express.Router();
const Categories = require('../models/Categories');

router.get('/', async(req, res) => {

    try {
        const categories = await Categories.find();
        res.json(categories);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', async(req, res) => {
    const category = new Categories({
        code: req.body.code,
        name: req.body.name,
    });

    try {
        const savedCategory = await category.save();
        res.json(savedCategory);
    } catch (err) {
        res.json({ message: err });
    }

});

module.exports = router;