const express = require('express');
const router = express.Router();
const Vehicle = require('../models/Vehicle');

router.get('/', async(req, res) => {

    try {
        const vehicles = await Vehicle.find();
        res.json(vehicles);
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/:vehicleId', async(req, res) => {

    try {
        const vehicle = await Vehicle.findById(req.params.vehicleId);
        res.json(vehicle);
    } catch (err) {
        res.json({ message: err });
    }

});

router.get('/getByCat/:category', async(req, res) => {

    try {
        console.log(req.params.category);
        const vehicles = await Vehicle.find({ categories: req.params.category });
        // if (!vehicles || vehicles.length === 0) res.status(400).send({ error: "No vehicles was found" })
        res.json(vehicles);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', async(req, res) => {

    const vehicle = new Vehicle({
        code: req.body.code,
        model: req.body.model,
        type: req.body.type,
        name: req.body.name,
        image: req.body.image,
        rate_per_month: req.body.rate_per_month,
        rate_per_week: req.body.rate_per_week,
        rate_per_day: req.body.rate_per_day,
        categories: req.body.categories,
    });
    try {
        const savedVehicle = await vehicle.save();
        res.json(savedVehicle);
    } catch (err) {
        res.json({ message: err });
    }

});

module.exports = router;