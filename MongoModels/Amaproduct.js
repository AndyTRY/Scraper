const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    price : {
        type: String,
        required: true
    },
    rating : {
        type: String,
        required: true
    },
    reviewnum : {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Amaproduct',ItemSchema)