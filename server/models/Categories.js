const mongoose = require('mongoose');

const CategoriesSchema = mongoose.Schema({
    code: String,
    name: String,
}, { timestamps: true });


module.exports = mongoose.model('Categories', CategoriesSchema);