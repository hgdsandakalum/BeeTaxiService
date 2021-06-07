const mongoose = require('mongoose');

const VehicleSchema = mongoose.Schema({
    code: String,
    model: String,
    type: String,
    name: String,
    image: String,
    rate_per_month: String,
    rate_per_week: String,
    rate_per_day: String,
    categories: Array,
}, { timestamps: true });

const Vehicle = mongoose.model('Vehicle', VehicleSchema);
module.exports = Vehicle;

// module.exports = mongoose.model('Vehicles', VehicleSchema);