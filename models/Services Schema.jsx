const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    service: {
        type: String,
        required: true
    }
});

const Item = mongoose.model('services', itemSchema);

module.exports = Item;
