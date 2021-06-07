const mongoose = require('mongoose');

const CategoriesSchema = mongoose.Schema({
    code: String,
    name: String,
}, { timestamps: true });

// CategoriesSchema.pre('remove', function(next) {
//     this.model('Vehicle').deleteMany({ categories: this._id }, next);
// });

module.exports = mongoose.model('Categories', CategoriesSchema);