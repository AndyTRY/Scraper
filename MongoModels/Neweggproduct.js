const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    brand : {
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
    reviewNum : {
        type: String,
        required: true
    },
    stock : {
        type: String,
        required: true
    },
    link : {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Neweggproduct',ItemSchema)