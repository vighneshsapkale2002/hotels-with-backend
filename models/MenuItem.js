const mongoose = require('mongoose');

// Define the Person Schema

const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        requred: true
    },
    price: {
        type: Number,
        requred: true
    },
    taste: {
        type: String,
        enum: ['spicy', 'sweet', 'sour'],
        requred: true
    },
    is_drink: {
        type: Boolean,
        default: false
    },
    ingredients: {
        type: String,
        default: []
    },
    num_sales: {
        type: Number,
        default: 0,
    }
})


const MenuItem = mongoose.model('MenuItem', menuItemSchema);
module.exports = MenuItem;